import React from "react";
import cre from "./cre.jpg";
import chris from "./chris.jpg";
import cr from "./cr.jpg";
import {AiOutlineHeart} from "react-icons/ai";
import {TbMessageCircle2} from "react-icons/tb";
import {SlPaperPlane} from "react-icons/sl";
import {BsBookmark} from "react-icons/bs";
import "./App.css";
import correct from "./correct.png";
import lauren from "./lauren.jpg";
import small from "./small.jpg";
import bieber from "./bieber.jpg";


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
    const sub = {
        height: "46px",
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
    const mid ={
        height:"100vh",
        width:"60%",
        margin:"auto",
        marginTop:"60px"
    }
    const min = {
        height:"50px",
        display:"flex",
        justifyContent:"start",
    }
    const photo ={
        marginTop:"20px",
        height:"540px",
        width:"498px",
        borderRadius:"6px",
        objectFit:"cover"
    }
    const icons ={
        display:"flex",
        justifyContent:"space-between",
    }
    const input ={
        width:"100%",
        borderRight:"none",
        borderTop:"none",
        borderLeft:"none",
        paddingBottom:"20px",
        borderWidth:"thin",
        
    }
    const cor={
        marginTop:"50px",
        width:"100px"
    }
    return(<div style={main}>
        <div style={{display:"flex",width:"200px"}}>
            <div style={top}>
                <img className ="pic" src={cre} style={img}/>
                <p style={{marginTop:"0px", fontSize:"12px"}}>cristiano</p>
            </div>
            <div style={second}>
                <img className ="pic" src={chris} style={img}/>
                <p style={{marginTop:"0px", fontSize:"12px"}}>justin_bieber</p>
            </div>
        </div>
        <div style={mid} className="main">
            <div style={min}>
                <div style={{display:"flex"}}>
                    <img className ="pic" src={small} style={sub}/>
                    
                    <p style={{marginRight:"330px"}}><span style={{fontSize:"13px",fontWeight:"bold",marginLeft:"4px"}}> lauren </span><span style={{color:"gray",fontWeight:"0"}}> &#183; 8m</span></p>
                    <p style={{fontSize:"20px",}}>&#8230;</p>
                </div>
            </div>
            <div>
                <img style={photo} src={lauren}/>
            </div>
            
            <div style={icons}>
                <div style={{display:"flex",width:"120px", justifyContent:"space-between",fontSize:"28px"}}> 
                    <a><AiOutlineHeart/></a>
                    <a><TbMessageCircle2/></a>
                    <a><SlPaperPlane/></a>
                </div>
                <div style={{fontSize:"26px"}}>
                    <a><BsBookmark/></a>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"start", flexDirection:"column",fontSize:"14px",alignItems:"start", lineHeight:"0px"}}>
                <p style={{fontWeight:"bold"}}>3,567 likes</p>
                <p><span style={{fontWeight:"bold"}}>lauren_daigle</span> look up</p>
                <p style={{color:"gray",marginBottom:"20px"}}>View all 563 comments</p>
                <input className="comment" style={input} type="text" placeholder="Add a comment..."/>
             
            </div>
            
        </div>
        
        
        <div>
            <img style={cor} src={correct}/>
            <p style={{fontWeight:"lighter",fontSize:"20px",lineHeight:"2px"}}>You've completely caught up</p>
            <p style={{color:"gray",marginTop:"2px"}}>You've seen all new posts from the past 3 days.</p>
        </div>





        <div style={mid} className="main">
            <div style={min}>
                <div style={{display:"flex"}}>
                    <img className ="pic" src={chris} style={sub}/>
                    
                    <p style={{marginRight:"330px"}}><span style={{fontSize:"13px",fontWeight:"bold",marginLeft:"4px"}}> justin </span><span style={{color:"gray",fontWeight:"0"}}>&#183; 7m</span></p>
                    <p style={{fontSize:"20px",}}>&#8230;</p>
                </div>
            </div>
            <div>
                <img style={photo} src={bieber}/>
            </div>
            
            <div style={icons}>
                <div style={{display:"flex",width:"120px", justifyContent:"space-between",fontSize:"28px"}}> 
                    <a><AiOutlineHeart/></a>
                    <a><TbMessageCircle2/></a>
                    <a><SlPaperPlane/></a>
                </div>
                <div style={{fontSize:"26px"}}>
                    <a><BsBookmark/></a>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"start", flexDirection:"column",fontSize:"14px",alignItems:"start", lineHeight:"0px"}}>
                <p style={{fontWeight:"bold"}}>3,567 likes</p>
                <p><span style={{fontWeight:"bold"}}>justin_bieber</span> I love coffee</p>
                <p style={{color:"gray",marginBottom:"20px"}}>View all 333 comments</p>
                <input className="comment" style={input} type="text" placeholder="Add a comment..."/>
             
            </div>
            
        </div>
        <div style={mid} className="main">
            <div style={min}>
                <div style={{display:"flex"}}>
                    <img className ="pic" src={cre} style={sub}/>
                    
                    <p style={{marginRight:"330px"}}><span style={{fontSize:"13px",fontWeight:"bold",marginLeft:"4px"}}> cristiano </span><span style={{color:"gray",fontWeight:"0"}}>&#183; 8m</span></p>
                    <p style={{fontSize:"20px",}}>&#8230;</p>
                </div>
            </div>
            <div>
                <img style={photo} src={cr}/>
            </div>
            
            <div style={icons}>
                <div style={{display:"flex",width:"120px", justifyContent:"space-between",fontSize:"28px"}}> 
                    <a><AiOutlineHeart/></a>
                    <a><TbMessageCircle2/></a>
                    <a><SlPaperPlane/></a>
                </div>
                <div style={{fontSize:"26px"}}>
                    <a><BsBookmark/></a>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"start", flexDirection:"column",fontSize:"14px",alignItems:"start", lineHeight:"0px"}}>
                <p style={{fontWeight:"bold"}}>3,567 likes</p>
                <p><span style={{fontWeight:"bold"}}>cristiano</span> the joyyyy</p>
                <p style={{color:"gray",marginBottom:"20px"}}>View all 333 comments</p>
                <input className="comment" style={input} type="text" placeholder="Add a comment..."/>
             
            </div>
            
        </div>
        
       

    </div>
    );
}
export default Middle;