import React from "react";
import pre from "../images/pre.jpg";
import '../App.css';
import mbappe from "../images/mbappe.jpg";
import jame from "../images/jame.jpg"


function Side(){
    const color={
        height:"100vh",
        width:"30vw",
    }
    const first = {
        height: "70px",
        marginTop: "50px",
        display: "flex",
        alignItems:"center",

    }
    const thumb ={
        height: "60px",
        borderRadius: "30px",

    }
    const word ={
        display:"flex"
    }
    const add ={
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginLeft:"26px",

    }
    const mini ={
        height: "100vh",
        width: "350px",
    }
    const swit ={
        color: "rgb(29, 155, 240)",
        marginLeft:"88px",
        fontSize: "12px",
        fontWeight:"bold"
    }
    const sug ={
        textAlign:"left",
        color: "gray",
        fontWeight:"bold",
        fontSize:"14px"

    }
    const suggy ={
        display:"flex",
        justifyContent:"space-between",
        width:"332px",
        alignItem:"center"
    }
    const lower = {
        height:"50px",
        display:"flex",
        marginTop:"20px",

    }
    const rest ={
        lineHeight:"0px",
        marginBottom:"12px",
        fontWeight:"bold",
        fontSize:"14px"

    }
    const restie ={
        marginTop:"0px",
        color: "gray",
        fontSize:"12px",
    }
    const pic ={
        height:"40px",
        borderRadius: "20px",
    }

    const follow ={
        color: "rgb(29, 155, 240)",
        marginLeft:"80px",
        fontSize: "14px",
        fontWeight:"bold",
        marginLeft:"180px"
    }
    const mer ={
        display:"flex"
    }
    const link ={
        marginTop:"40px",
        display:"flex",
        alignItems:"start",
        flexDirection:"column",
        fontSize:"12px",
        color:"gray"
    }
    return(
        <div className="side" style={color}>
            <div style={mini}>
                <div style={first}>
                    <img  style={thumb} src={pre} />
                    <div style={word}>
                        <div style={add}>
                            <p style={{lineHeight:"0px",marginBottom:"12px",fontWeight:"bold", fontSize:"14px"}}>annorericakyei</p>
                            <p style={{marginTop:"0px",color: "gray",fontSize:"16px"}}>Annor Erica Kyei</p>
                        </div>
                        <p style={swit}>Switch</p>
                    </div>

                </div>
                <div style={suggy}>
                    <p style={sug}>Suggestions for you</p>
                    <p style={{fontWeight:"bold",fontSize:"14px"}}>see All</p>
                </div>
                <div style={lower}>
                    <img  style={pic} src={jame}/>
                    <div style={mer}>
                        <div style={{marginLeft:"10px"}} >
                            <p style={rest}>kmbappe</p>
                            <p style={restie}>follows you</p>
                        </div>

                        <p style ={follow}>follow</p>
                    </div>

                </div>
                <div style={lower}>
                    <img  style={pic} src={jame}/>
                    <div style={mer}>
                        <div style={{marginLeft:"10px"}} >
                            <p style={rest}>kmbappe</p>
                            <p style={restie}>follows you</p>
                        </div>

                        <p style ={follow}>follow</p>
                    </div>

                </div>
                <div style={lower}>
                    <img  style={pic} src={jame}/>
                    <div style={mer}>
                        <div style={{marginLeft:"10px"}} >
                            <p style={rest}>kmbappe</p>
                            <p style={restie}>follows you</p>
                        </div>

                        <p style ={follow}>follow</p>
                    </div>

                </div>
                <div style={link}>
                    <a style={{textAlign:"left"}}>
                    About &#183; Help&#183;Press &#183; API &#183;Jobs  &#183; Privacy  &#183; Terms
                    </a>
                    <a style={{marginTop:"4px"}}>location  &#183; Language  &#183; Meta Verified </a>
                </div>
                <div style={link}>
                    <a>&#169; 2023 INSTAGRAM FROM META .</a>
                </div>
            </div>



        </div>
    );
}
export default Side;
