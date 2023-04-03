import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  let insta ={
      fontFamily:"'Billabong', sans-serif",
      fontSize:"32px",
      fontWeight:"lighter"
  }
  return (
    <>
    <div class="all">
    <div class="instagram">
      <div class="logo">
        <img src="https://www.sirendesign.com.au/wp-content/themes/siren/library/images/instagram-logo.png" alt="" />
      </div>
      <h2 style={insta}>Instagram</h2>
      <p style={{alignText: "center"}}>
      Sign up to see photos and videos <br /> from your friends.
      <div className="buttons">
        <button>Log in with facebook</button>
      </div>
      OR
      </p>
      <div class="inputer">
        <input type="text" placeholder="Mobile Number or Email" />
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Enter password" />
      </div>
      <div class="buttons">
        <button>Sign up</button>
      </div>
      <div class="facebook">
        Have an account? <Link to="/login" style={{textDecoration: "none"}}>Log in</Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default SignUp;
