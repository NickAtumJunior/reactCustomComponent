import * as React from "react";
import "./App.css";
import Card from "./Components/Card";


function App() {

  return (
       <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
       }}>
           <Card
           title='Hello'
           description="this is my first custom component"
           />
           <Card
           title='Raghav'
           description="this is my first custom component"
           />
       </div>
  );
}

export default App;
