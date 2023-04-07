import React from "react";
import { Link } from "react-router-dom";
import {GrHomeRounded} from "react-icons/gr";
import {TbSearch} from "react-icons/tb";
import {MdOutlineExplore} from "react-icons/md";
import {BiMoviePlay} from "react-icons/bi";
import {TbBrandMessenger} from "react-icons/tb";
import {FiHeart} from "react-icons/fi";
import {TbNewSection} from "react-icons/tb";
import {CgProfile} from "react-icons/cg";
import {BsList} from "react-icons/bs";


function Sidebar(){

    let side ={
        position:"fixed",
        left:"0px",
        top:"0px",
        bottom:"0px",
        width:"16vw",
        borderRight:"1px solid rgb(195 204 208) "
    } 
    let link ={
        listStyle:"none",
        height: "70vh",
        marginTop:"40px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"start",
        fontFamily: "'Roboto', sans-serif",
        fontSize:"16px",
    }
    let insta ={
        fontFamily:"'Billabong', sans-serif",
        fontSize:"32px",
        fontWeight:"lighter",
        textDecoration: "none",
        color: "black",
    }
    let span ={
        fontSize:"26px"
    }
    let spann ={
        fontSize:"28px"
    }

    let a ={
        display:"flex",
        alignItems:"center",
        width:"80px",
        justifyContent:"space-between"
    }
    let mes = {
        display:"flex",
        alignItems:"center",
        width:"110px",
        justifyContent:"space-between" 
    }
    let no ={
        display:"flex",
        alignItems:"center",
        width:"130px",
        justifyContent:"space-between" 
    }
    let ex ={
        display:"flex",
        alignItems:"center",
        width:"92px",
        justifyContent:"space-between" 
    }

    let bottom = {
        height:"130px",
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        alignItems:"flex-end",

    }
    let mini ={
        marginLeft:"30px",
        display:"flex",
        width:"80px",
        alignItems:"center",
        justifyContent:"space-between"
    }
    
    return(


        <div style={side}>

            <ul style={link}>
                <li><Link to="/" style={insta}>Instagram</Link></li>
                <li><a style={a}><span style={span}><GrHomeRounded/> </span> Home</a></li>
                <li><a style={a}><span style={span}><TbSearch/></span>  Search</a></li>
                <li><a style={ex}><span style={span}><BiMoviePlay/></span>  Explore</a></li>
                <li><a style={mes}><span style={span}><TbBrandMessenger/>  </span>Messages</a></li>
                <li><a style={no}><span style={span}><FiHeart/></span>  Notifications</a></li>
                <li><a style={a}><span style={span}><TbNewSection/></span>  Create</a></li>
                <li><a style={a}><span style={span}><CgProfile/></span>  Profile</a></li>
            </ul>
            <div style={bottom}>
                <div style={mini}> <span style={spann}><BsList/></span> More</div>
               
            </div>
        </div>
    );
}

export default Sidebar;
