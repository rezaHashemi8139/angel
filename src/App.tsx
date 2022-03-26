import { useEffect, useState } from "react";
import { getAllMembers } from "./api/member";
import { IMember } from "./interFace/member";
import { StyledTable } from "./style";



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

        <button>add member</button>
      </div>
      <StyledTable>
        <thead>
          <th>first name</th>
          <th>last name</th>
          <th>phone number</th>
          <th>email</th>
          <th>delete member</th>
          <th>edit member</th>
        </thead>
        <tbody>
          {memberList.map(member => <tr key={member.member_id}>
            <td>{member.first_name}</td>
            <td>{member.last_name}</td>
            <td>{member.phone}</td>
            <td>{member.email}</td>
            <td>X</td>
            <td>edit</td>
          </tr>)}
        </tbody>
      </StyledTable>

    </div>
  );
}

export default App;
