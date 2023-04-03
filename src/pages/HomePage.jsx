import React from "react";
import Sidebar from "../components/sidebar.js";
import Side from "../components/side.js";
import Middle from "../components/middle.js";

const HomePage = () => {
  const style={
    display:"flex",
    marginLeft: "16vw"
  }

  return (
    <div className="App">
      <Sidebar/>
      <div style={style}>

        <Middle/>
        <Side/>
      </div>

    </div>
  )
}

export default HomePage;
