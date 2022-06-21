import React from "react";

// let time = new Date().toLocaleTimeString();
// console.log(time);


function App() {

  const[time, state] = React.useState(new Date().toLocaleTimeString()); 

  function getTime(){
    state(new Date().toLocaleTimeString()); 
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
