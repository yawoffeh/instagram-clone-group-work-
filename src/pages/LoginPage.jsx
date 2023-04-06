import React from "react";
import "./LoginStyle.css";

const LoginPage = () => {
  return (
    <>
      <body>
          <div class="container">
              <div class="phoneapp">
                  <img src="/Login/images/phoneapp.PNG" alt="phoneapp" />
              </div>
              <div class="main">
              <div class="container1">
                  <img id="instafont" src="/Login/images/instafont.PNG" />
                  <form>
                      <input id="email" type="text" placeholder="Phone number, username, or email" /><br />
                      <input id="password" type="password" placeholder="Password" /><br />
                      <button id="login"><strong>Log in</strong></button><br />
                  </form>
                  <div id="or">
                      OR
                  </div>   
                  <a id="facebook-login" href="facebook.com">
                      <img id="fb" src="/Login/images/fb.PNG" /><br />
                  </a>
                  <a style="text-decoration: none" id="forgot-ps" href="#">Forgot password?</a><br />
              </div>
              <div class="container2">
                  <div id="signup">
                      <span id="no-account">Don't have an account?</span> 
                      <a style="text-decoration: none" href="#">Sign up</a>
                  </div>
              </div>
              <div class="get-app">
                  <div id="getapp">
                      Get the app.<br />
                  </div>
                  <a href="#"><img id="play-store" src="/Login/images/play_store.PNG" /></a>
                  <a href="#"><img id="ms-store" src="/Login/images/ms_store.PNG" /></a>
              </div>
              </div>
          </div>
          <div class="container3">
              <div><a style="text-decoration: none" id="more" href="#">Meta</a></div>
              <div><a style="text-decoration: none" id="more" href="#">About</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Blog</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Jobs</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Help</a></div>
              <div><a style="text-decoration: none" id="more" href="#">API</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Privacy</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Terms</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Top Accounts</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Locations</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Instagram Lite</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Contact Uploading & Non-Users</a></div>
              <div><a style="text-decoration: none" id="more" href="#">Meta Verified</a></div>
          </div>
      </body>
    </>
    )
}

export default LoginPage;
