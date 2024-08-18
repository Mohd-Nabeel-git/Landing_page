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


document.addEventListener('DOMContentLoaded', () => {

  const contactButtons = document.querySelectorAll('.contact-button');
  
  contactButtons.forEach(button => {
      button.addEventListener('click', () => {
          window.location.href = 'contact.html';
      });
  });
});
