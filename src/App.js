import React from "react";
import record from "./Api.json";

function App() {
  return (
    <>
    <h1>hello</h1>


    {
      record.map(record => {
        return(
          <>
          <div key={record.id}>
            <img src={record.image} alt="pics" />
           {record.title}
           </div>
          </>
        )
      })
    }


    </>
  );
}

export default App;
