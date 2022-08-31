let isVisible = false;
let eye = document.querySelector(".eye");
let passType = document.querySelector("#password");

function displayPass() {
  if (isVisible) {
    isVisible = false;
    passType.setAttribute("type", "password");
    eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    isVisible = true;
    passType.setAttribute("type", "text");
    eye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
}

eye.addEventListener("click", displayPass);


