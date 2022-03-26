import React, { useEffect, useState } from "react";
import { getAllMembers, deleteMemberById } from "./api/member";
import { IMember } from "./interFace/member";
import { StyledTable, StyledContainer, StyledButton } from "./style";



function App() {
  const [memberList, setMemberList] = useState<IMember[]>([])

  const getMemberList = async () => {
    try {
      const { data } = await getAllMembers();
      setMemberList(data)
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

  const initComponent = () => {
    getMemberList()
  }

  useEffect(initComponent, []);

  return (
    <div>
      <StyledButton>add new member</StyledButton>

      <StyledContainer>
        <StyledTable>
          <thead>
            <th>first name</th>
            <th>last name</th>
            <th>phone number</th>
            <th>email</th>
            <th>Operation</th>
          </thead>
          <tbody>
            {memberList.map(member => <tr key={member.member_id}>
              <td>{member.first_name}</td>
              <td>{member.last_name}</td>
              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td>
                <i className="fa fa-trash" id={`delete_${member.member_id}`} onClick={handleDeleteMember} />
                <i className="fa fa-edit" id={`edit_${member.member_id}`} />
              </td>
            </tr>)}
          </tbody>
        </StyledTable>
      </StyledContainer>
    </div>
  );
}

export default App;
