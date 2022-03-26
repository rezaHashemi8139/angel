import React, { useEffect, useState } from "react";
import { getAllMembers, deleteMemberById, getMemberById } from "./api/member";
import { IMemberId, IMember } from "./interFace/member";
import { StyledTable, StyledContainer, StyledButton } from "./styleApp";
import NewMemberModal from "./NewMemberModal";

interface ISort {
  sortField: keyof IMemberId
  sortKind: "asc" | "des"
  isSorted: boolean
}

function App() {
  const [memberList, setMemberList] = useState<IMemberId[]>([])
  const [member, setMember] = useState<IMemberId | undefined>(undefined)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [sort, setSort] = useState<ISort>({ sortField: "first_name", sortKind: "asc", isSorted: false })
  const [modifiedMemberList, setModifiedMemberList] = useState<IMemberId[]>([])

  const getMemberList = async () => {
    try {
      const { data } = await getAllMembers();
      setMemberList(data)
      setModifiedMemberList(data)
      setModalIsOpen(false)
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteMember = async (event: React.MouseEvent<HTMLElement>) => {
    const [_, id] = event.currentTarget.id.split("_")
    try {
      await deleteMemberById(id)
      getMemberList()
    } catch (error) {
      console.error(error);
    }
  }

  const handleEditMember = async (event: React.MouseEvent<HTMLElement>) => {
    const [_, id] = event.currentTarget.id.split("_")
    try {
      const { data } = await getMemberById(id)
      setMember(data)
      setModalIsOpen(true)
    } catch (error) {
      console.error(error);
    }
  }

  const initComponent = () => {
    getMemberList()
  }

  const handleSort = (event: React.MouseEvent<HTMLElement>) => {
    const aa: Array<keyof IMember> = ["first_name", "last_name", "phone", "email"]
    const { id } = event.currentTarget;
    const i = aa.find(x => x === id)
    const sortType = { ...sort }
    if (id === sortType.sortField && sortType.isSorted) {
      if (sortType.sortKind === "des") {
        sortType.sortKind = "asc"
      } else {
        sortType.isSorted = false
      }
    } else {
      sortType.sortField = i || "first_name"
      sortType.sortKind = "des"
      sortType.isSorted = true
    }
    setModifiedMemberList(sortList(memberList, sortType))
    sortList(memberList, sortType)
    setSort(sortType)
  }

  const sortList = (list: Array<IMemberId>, sortType: ISort) => {
    const i = sortType.sortKind === "asc" ? 1 : -1
    if (!sortType.isSorted) {
      return list
    }
    return list.sort((a, b) => {
      if (String(a[sortType.sortField]).toUpperCase() > String(b[sortType.sortField]).toUpperCase()) {
        return -1 * i;
      }
      return 1 * i
    });

  }

  useEffect(initComponent, []);

  return (
    <div>
      <StyledButton onClick={() => setModalIsOpen(true)}>add new member</StyledButton>
      <NewMemberModal
        initials={member}
        open={modalIsOpen}
        handleClose={() => setModalIsOpen(false)}
        updateMemberList={getMemberList}
      />
      <StyledContainer>
        <StyledTable>
          <thead>
            <tr>
              <th className="sorting" id="first_name" onClick={handleSort}>
                <span>first name</span>
                {sort.isSorted && sort.sortField === "first_name" && <i className={`fa fa-arrow-${sort.sortKind === "asc" ? "up" : "down"}`} />}
              </th>
              <th className="sorting" id="last_name" onClick={handleSort}>
                <span>last name</span>
                {sort.isSorted && sort.sortField === "last_name" && <i className={`fa fa-arrow-${sort.sortKind === "asc" ? "up" : "down"}`} />}
              </th>
              <th className="sorting" id="phone" onClick={handleSort}>
                <span>phone number</span>
                {sort.isSorted && sort.sortField === "phone" && <i className={`fa fa-arrow-${sort.sortKind === "asc" ? "up" : "down"}`} />}

              </th>
              <th className="sorting" id="email" onClick={handleSort}>
                <span>email</span>
                {sort.isSorted && sort.sortField === "email" && <i className={`fa fa-arrow-${sort.sortKind === "asc" ? "up" : "down"}`} />}
              </th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {modifiedMemberList.map(member => <tr key={member.member_id}>
              <td>{member.first_name}</td>
              <td>{member.last_name}</td>
              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td>
                <i className="fa fa-trash" id={`delete_${member.member_id}`} onClick={handleDeleteMember} />
                <i className="fa fa-edit" id={`edit_${member.member_id}`} onClick={handleEditMember} />
              </td>
            </tr>)}
          </tbody>
        </StyledTable>
      </StyledContainer>
    </div>
  );
}

export default App;
