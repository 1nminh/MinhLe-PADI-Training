function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function redirectToNextPage() {
  var emailValue = document.getElementById("emailInput").value.trim();
  var displayWarningEmail = document.getElementById("displayWarningEmail");

  if (emailValue !== "" && isValidEmail(emailValue)) {
    var url = "pw-login-form.html?email=" + encodeURIComponent(emailValue);
    window.location.href = url;
  } else {
    displayWarningEmail.style.display = "block";
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   var displayWarningEmail = document.getElementById("displayWarningEmail");
//   displayWarningEmail.style.display = "none";
// });

var params = new URLSearchParams(window.location.search);
var emailValue = params.get("email");

if (emailValue) {
  document.getElementById("displayEmail").textContent = emailValue;
}
