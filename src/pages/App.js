import logo from './logo.svg';
import './App.css';
import Sidebar from "./sidebar.js";
import Side from "./side.js";
import Middle from "./middle.js";

function App() {
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
  );
}

export default App;
