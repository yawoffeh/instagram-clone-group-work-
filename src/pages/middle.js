import React from "react";
import cre from "./cre.jpg";
import chris from "./chris.jpg";




function Middle(){

    const main ={
        width:"54vw",
        height: "100vh"
    }
    const img ={
        height: "60px",
        borderRadius:"40px",
        marginBottom:"0px",
        marginRight:"2px",
    }
    const top ={
        height:"70px",
        marginTop:"50px",
        width:"80px",
        marginLeft:"100px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        
        
        
    }
    const second ={
        height:"70px",
        marginTop:"50px",
        width:"80px",
        marginLeft:"10px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
    }
    return(<div style={main}>
        <div style={{display:"flex",width:"200px"}}>
            <div style={top}>
                <img className ="pic" src={cre} style={img}/>
                <p style={{marginTop:"0px", fontSize:"12px"}}>cristiano</p>
            </div>
            <div style={second}>
                <img className ="pic" src={chris} style={img}/>
                <p style={{marginTop:"0px", fontSize:"12px"}}>chrisbrown</p>
            </div>
        </div>
       

    </div>
    );
}
export default Middle;