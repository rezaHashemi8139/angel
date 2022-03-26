import { useEffect, useState } from "react";
import { getAllMembers } from "./api/member";
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

  const init = () => {
    getMemberList()
  }

  useEffect(init, []);

  return (
    <div>
      <div>add new member :

        <StyledButton>add member</StyledButton>
      </div>
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
                <i className="fa fa-trash" />
                <i className="fa fa-edit" />
              </td>
            </tr>)}
          </tbody>
        </StyledTable>
      </StyledContainer>
    </div>
  );
}

export default App;
