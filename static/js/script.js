
//back to sign in page
function backToLogin(){
    container.classList.remove("active");
}

//login to another html
function login()
{
  let username = document.getElementById('username').value;
  localStorage.setItem('username',username);
  let password = document.getElementById('password').value;
  let password1="testlogin";

  if(password==password1)
  {
    document.getElementById("errorMessage").style.display = "none";
    window.location.href = "/predict";
  }
  else
  {
    document.getElementById("errorMessage").textContent = "Invalid username or password!";
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("errorMessage").style.height = "auto";
  }

}

//hide the p tag
let div = document.querySelector(".password");
function hideshow()
{
  div.scrollIntoView({ behavior: 'smooth' });
  div.classList.toggle("hide");
}


//toggle to sign up page
function forgotPassword() {
    container.classList.add("active");
  }

