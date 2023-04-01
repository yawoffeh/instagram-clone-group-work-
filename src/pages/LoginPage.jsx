import React from "react";

const LoginPage = () => {
  return (
<style>    
     body{

  background:#fafafa;

  margin:0;

  padding:0;

}

*{

  font-family: "proxima-nova",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;

}

.instagram{

  background:#ffffff;

  border: 1px solid #e6e6e6;

  width:350px;

  border-radius:3px;

  margin-bottom:10px;

  text-align:center;

  padding:5px;

}

.all{

  width:350px;

  position:relative;

  left:50%;

  margin-left:-175px;

  margin-top:25px;

}

.input{

  width:270px;

  margin:auto;

}

.inputer input{

  width: 250px;

  padding:10px;

  border: 1px solid #dbdbdb;

  border-radius: 3px;

  margin-top:7px;

  outline:0;

  color:#262626;

}

.inputer input:focus{

  border:1px solid #aaa;

}

.buttons{

  width:270px;

  margin:auto;

}

.buttons button{

  width: 100%;

  outline:0;

  font-size:14px;

  margin-top:15px;

  margin-bottom:25px;

  padding:10px;

  font-weight:bold;

  color:#fff;

  background:#3897f0;

  border:none;

  border-radius:3px;

}

.logo {

  margin:auto;

  width:270px;

  text-align:center;

}

.logo img{

  width:60%;

  margin-top:20px;

}

.facebook{

  width:270px;

  margin:auto;

  text-align:center;

  color:#262626;

  font-size:13px;

  margin-bottom:15px;

}

.pad{

  padding:20px 5px;

}

</style>
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
