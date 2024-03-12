let login = document.querySelector(".login");

let emailError = document.querySelector(".email_error");
let passwordError = document.querySelector(".password_error");


function specialCharacter(pass){
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacterRegex.test(pass);
}

function validLoginForm(event) {
    event.preventDefault();
    let password = document.querySelector(".password").value;
    let email = document.querySelector(".email").value;
   

  if (email == "") {
    emailError.classList.add("form-control");
    emailError.innerHTML = "please enter the email";
    return false;
  }
 emailError.innerHTML='';
 emailError.classList.remove("form-control");

  if (password == "") {
    passwordError.classList.add('form-control');
    passwordError.innerHTML = "please enter the password";
    return false;
  }
   else if (password.length < 8) {
    passwordError.classList.add('form-control');
    passwordError.innerHTML = "password must be atleast 8 character";
    return false;
  } 
  else if(!specialCharacter(password)){
    passwordError.classList.add('form-control');
    passwordError.innerHTML='Password must contain at least one special character';
    return false;
  }
  passwordError.innerHTML='';
  passwordError.classList.remove('form-control');

  emailError.classList.remove("form-control");
    return true;
  
}

login.addEventListener("click", validLoginForm);
