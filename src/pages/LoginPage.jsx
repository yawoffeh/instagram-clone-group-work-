import React from "react";
import "./LoginStyle.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <body>
          <div class="container">
              <div class="phoneapp">
                  <img src={require("../images/phoneapp.PNG")} alt="phoneapp" />
              </div>
              <div class="main">
              <div class="container1" >
                  <img style={{marginTop: "20px"}} id="instafont" src={require("../images/instafont.PNG")} />
                  <form style={{margin: "0 auto"}}>
                      <input id="email" type="text" placeholder="Phone number, username, or email" /><br />
                      <input id="password" type="password" placeholder="Password" /><br />
                      <Link to="/home" ><button id="login" style={{cursor: "pointer"}}><strong>Log in</strong></button></Link><br />
                  </form>
                  <div id="or">
                      OR
                  </div>   
                  <a id="facebook-login" href="facebook.com">
                      <img className="fb" src={require("../images/fb.PNG")} /><br />
                  </a>
                  <a style={{textDecoration: "none"}} id="forgot-ps" href="#">Forgot password?</a><br />
              </div>
              <div class="container2" style={{border: "none"}}>
                  <div id="signup">
                      <span id="no-account">Don't have an account?</span> 
                      <Link style={{textDecoration: "none"}} to="/signup">Sign up</Link>
                  </div>
              </div>
              <div class="get-app">
                  <div id="getapp">
                      Get the app.<br />
                  </div>
                  <a href="#"><img id="play-store" src={require("../images/play_store.PNG")} /></a>
                  <a href="#"><img id="ms-store" src={require("../images/ms_store.PNG")} /></a>
              </div>
              </div>
          </div>
          <div className="container3" style={{textDecoration: "none"}}>
              <div><a id="more" href="#">Meta</a></div>
              <div><a id="more" href="#">About</a></div>
              <div><a id="more" href="#">Blog</a></div>
              <div><a id="more" href="#">Jobs</a></div>
              <div><a id="more" href="#">Help</a></div>
              <div><a id="more" href="#">API</a></div>
              <div><a id="more" href="#">Privacy</a></div>
              <div><a id="more" href="#">Terms</a></div>
              <div><a id="more" href="#">Top Accounts</a></div>
              <div><a id="more" href="#">Locations</a></div>
              <div><a id="more" href="#">Instagram Lite</a></div>
              <div><a id="more" href="#">Contact Uploading & Non-Users</a></div>
              <div><a id="more" href="#">Meta Verified</a></div>
          </div>
      </body>
    </>
    )
}

export default LoginPage;
