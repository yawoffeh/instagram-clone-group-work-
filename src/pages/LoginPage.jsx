import React from "react";

const LoginPage = () => {
  return (
    <div class="all">
    <div class="instagram">
      <div class="logo">
        <img src="https://www.sirendesign.com.au/wp-content/themes/siren/library/images/instagram-logo.png" alt="" />
      </div>
      <h2>Instagram</h2>
      <div class="inputer">
        <input type="text" placeholder="Enter name or email" />
        <input type="password" placeholder="Enter password" />
      </div>
      <div class="buttons">
        <button>Login</button>
      </div>
      <div class="facebook">
        Continue with Facebook?
      </div>
    </div>
    </div>


  )
}

export default LoginPage;
