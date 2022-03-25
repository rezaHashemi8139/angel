import { useEffect } from "react";
import { getAllMembers } from "./api/member";


function App() {

  const getMemberList = async () => {
    try {
      const { data } = await getAllMembers()
      console.log(data);

    } catch (error) {

    }
  }


  const init = () => {
    getMemberList()
  }
  useEffect(init, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
