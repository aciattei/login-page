const container = document.querySelector('.container'),
      pwShowHide = document.querySelectorAll('.showHidePw'),
      pwFields = document.querySelectorAll('.password'),
      signup = document.querySelectorAll('.signup-text'),
      login = document.querySelectorAll('.login-text');

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", ()=> {
    pwFields.forEach(pwFields => {
      if(pwFields.type === "password") {
          pwFields.type = "text";
        pwShowHide.forEach(icon => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        })
      }else{
        pwFields.type = "password";
        
        pwShowHide.forEach(icon => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        })
      }
    })
  })
})