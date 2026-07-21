const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e){

e.preventDefault();

document.querySelectorAll(".error").forEach(error=>{
error.innerHTML="";
});

document.getElementById("message").innerHTML="";

let valid=true;

const name=document.getElementById("name").value.trim();
const roll=document.getElementById("roll").value.trim();
const email=document.getElementById("email").value.trim();
const mobile=document.getElementById("mobile").value.trim();
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirmPassword").value;
const department=document.getElementById("department").value;
const dob=document.getElementById("dob").value;
const gender=document.querySelector('input[name="gender"]:checked');

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rollPattern=/^[A-Za-z0-9]+$/;
const mobilePattern=/^[0-9]{10}$/;

if(name===""){
document.getElementById("nameError").innerHTML="Name is required";
valid=false;
}

if(!rollPattern.test(roll)){
document.getElementById("rollError").innerHTML="Only letters and numbers allowed";
valid=false;
}

if(!emailPattern.test(email)){
document.getElementById("emailError").innerHTML="Enter valid email";
valid=false;
}

if(!mobilePattern.test(mobile)){
document.getElementById("mobileError").innerHTML="Enter 10 digit mobile number";
valid=false;
}

if(password.length<8){
document.getElementById("passwordError").innerHTML="Minimum 8 characters";
valid=false;
}

if(password!==confirmPassword){
document.getElementById("confirmPasswordError").innerHTML="Passwords do not match";
valid=false;
}

if(!gender){
document.getElementById("genderError").innerHTML="Select gender";
valid=false;
}

if(department===""){
document.getElementById("departmentError").innerHTML="Select department";
valid=false;
}

if(dob===""){
document.getElementById("dobError").innerHTML="Select date of birth";
valid=false;
}

if(valid){

document.getElementById("message").innerHTML="Registration Successful!";

alert("Registration Successful!");

form.reset();

}

});