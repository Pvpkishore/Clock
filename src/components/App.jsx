import React, {useState} from "react";


function App() {
setInterval(Resettime,1000);

let timenow = new Date().toLocaleTimeString();
const [time,settime]=useState(timenow);

function Resettime(){
  let newtimenow = new Date().toLocaleTimeString();
  settime(newtimenow);
}
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Resettime}>Get Time</button>
    </div>
  );
}

export default App;
