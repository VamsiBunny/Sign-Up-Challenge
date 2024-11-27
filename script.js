document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("password").addEventListener("input", validatePassword);

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  handleFormSubmission();
});

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailMessage = document.getElementById("emailMessage");

  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailMessage.textContent = "All good to Go!";
    emailMessage.style.color = "#13a61b";
  } else {
    emailMessage.textContent = "Make sure your email is more than 3 characters and includes '@' and '.'";
    emailMessage.style.color = "red";
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const passwordMessage = document.getElementById("passwordMessage");

  if (password.length > 8) {
    passwordMessage.textContent = "All good to Go!";
    passwordMessage.style.color = "#13a61b";
  }else {
    passwordMessage.textContent = "Make sure password is more than 8 characters";
    passwordMessage.style.color = "red";
  }

}


function handleFormSubmission() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  if (email.length > 3 && email.includes("@") && email.includes(".") && password.length > 8) {
    
    const confirmation = confirm("Are you sure you want to submit?");
    if (confirmation) {
      alert("Successful signup!");
    } else {
      
      document.getElementById("email").value = '';
      document.getElementById("password").value = '';
      document.getElementById("emailMessage").textContent = '';
      document.getElementById("passwordMessage").textContent = '';
      window.location.reload(); 
    }
  } else {
    alert("Please ensure all fields are valid before submitting.");
  }
}
