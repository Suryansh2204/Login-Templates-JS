let isVisible = false;
function displayPass() {
  let passType = document.querySelector("#password");
  let eye = document.querySelector(".eye");
  if (isVisible) {
    isVisible = false;
    passType.setAttribute("type", "password");
    eye.innerHTML = `<i class="fa-solid fa-eye-slash" onclick="displayPass()" ></i>`;
  } else {
    isVisible = true;
    passType.setAttribute("type", "text");
    eye.innerHTML = `<i class="fa-solid fa-eye" onclick="displayPass()"></i>`;
  }
}

var isFirst = true;
function changePg() {
  let container = document.querySelector(".container");
  if (isFirst) {
    isFirst = false;
    container.innerHTML = `
    <div class="left">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <button class="btn-signIn" onclick="changePg()">SIGN IN</button>
    </div>
    <div class="sign-up">
      <h1>Create Account</h1>
      <div class="btn">
        <button><i class="fa-brands fa-facebook-f"></i></button>
        <button><i class="fa-brands fa-google-plus-g"></i></button>
        <button><i class="fa-brands fa-linkedin-in"></i></button>
      </div>
      <p>or use your email for registration:</p>
  
      <div class="input1">
        <div class="name1">
          <i class="fa-solid fa-user"></i>
          <input type="text" id="name1" placeholder="Name">
        </div>
      <div class="username1">
        <i class="fa-solid fa-envelope"></i>
        <input type="text" id="username1" placeholder="Username">
      </div>
      <div class="password1">
        <i class="fa-solid fa-lock" ></i>
        <input type="text" id="password1" placeholder="Password">
      </div>
    </div>
  
    <button class="btn-signup" >SIGN UP</button>
  
  </div>`;
  } 
  
  else
  {
    isVisible=false;
    isFirst = true;
    container.innerHTML = `
    <div class="sign-in">
      <h1>Sign in to your Account</h1>
      <div class="btn">
        <button><i class="fa-brands fa-facebook-f"></i></button>
        <button><i class="fa-brands fa-google-plus-g"></i></button>
        <button><i class="fa-brands fa-linkedin-in"></i></button>
      </div>
      <p>or use your email account:</p>
      <div class="input">
        <div class="username">
          <i class="fa-solid fa-envelope"></i>
          <input type="text" id="username" placeholder="Username">
        </div>
        <div class="password">
          <i class="fa-solid fa-lock"></i>
          <input type="password" id="password" placeholder="Password">
          <div class="eye">
            <i class="fa-solid fa-eye-slash" onclick="displayPass()"></i>
          </div>
        </div>
      </div>
      <a href="#">Forgot your password?</a>
      <button class="btn-signin">SIGN IN</button>
    </div>
    <div class="right">
      <h1>Hello, Tomodachi!</h1>
      <p>Sign up and discover a great amount of new opportunities !</p>
      <button class="btn-signUp" onclick="changePg()">SIGN UP</button>
    </div>`;
  }

}

// document.querySelector(".eye").addEventListener("click", displayPass);