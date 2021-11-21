let form= document.querySelector("#form");
let email= document.querySelector("#email");
let submit= document.querySelector(".arrow");
let error= document.querySelector(".error");
let errorIcon= document.querySelector(".error-icon");
let pattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validateMail();
});
function validateMail(){
    let emailValue= email.value;
    if(emailValue===""){
        errorIcon.style.display= "block";
        error.innerHTML= "Please enter an email!";
        email.style.borderColor= "hsl(0, 93%, 68%)";
    }
    else if(!emailValue.match(pattern)){
        errorIcon.style.display= "block";
        error.innerHTML= "Please enter a valid email!";
        email.style.borderColor= "hsl(0, 93%, 68%)";
    }
    else{
        errorIcon.style.display= "none";
        error.innerHTML= "Successful";
        email.style.borderColor= "hsl(0, 36%, 70%)";
        form.reset();
        setTimeout(()=>{error.innerHTML= ""}, 3000);}
}
