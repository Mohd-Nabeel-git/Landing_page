var countDownDate = new Date("sept 10, 2024 ").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 

let cont = document.getElementsByClassName("deal")
cont[0].style.color = "#3C4C85"

// // landing.js
// document.addEventListener('DOMContentLoaded', (event) => {
//   // Get the button element
//   const contactButton = document.getElementById('contact-button');
  
//   // Add event listener for click
//   contactButton.addEventListener('click', () => {
//       // Navigate to the contact form page
//       window.location.href = 'contact.html';
//   });
// });

// landing.js
document.addEventListener('DOMContentLoaded', () => {
  // Get all buttons with the class 'contact-button'
  const contactButtons = document.querySelectorAll('.contact-button');
  
  // Add event listener to each button
  contactButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Navigate to the contact form page
          window.location.href = 'contact.html';
      });
  });
});
