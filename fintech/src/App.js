import Welcome from "./components/Welcome";
import { useState } from "react"; //state hook 을 import

function App() {
  let username = "미입력";
  let [usernameWithState, setUsernameWithState] = useState("초기값");

  const handleInputChange = (e) => {
    setUsernameWithState(e.target.value);
    console.log(username);
  };
  return (
    <div>
      이름 : <input onChange={handleInputChange}></input>
      <h1>{usernameWithState}</h1>
      {/* 주석처리는 ctl + / */}
    </div>
  );
}

export default App;
