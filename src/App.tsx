import React, { useEffect, useState } from "react";
import { getAllMembers, deleteMemberById, getMemberById } from "./api/member";
import { IMemberId } from "./interFace/member";
import { StyledTable, StyledContainer, StyledButton } from "./styleApp";
import NewMemberModal from "./NewMemberModal";



function App() {
  const [memberList, setMemberList] = useState<IMemberId[]>([])
  const [member, setMember] = useState<IMemberId | undefined>(undefined)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const getMemberList = async () => {
    try {
      const { data } = await getAllMembers();
      setMemberList(data)
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
              <th>first name</th>
              <th>last name</th>
              <th>phone number</th>
              <th>email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map(member => <tr key={member.member_id}>
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
