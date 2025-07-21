 "https://unpkg.com/aos@next/dist/aos.js"
 AOS.init({offset:0,});
    
function hamburg(){ 
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
} 
// for Typewriter effect

const texts = [
    "FRONTEND DEVELOPER",
    "Profession coder", 
    "UI  designer"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

   window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);

});


document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
 
<link src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></link>

  // Initialize EmailJS
  (function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your User ID
  })();

  // Handle form submit
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(function () {
        document.getElementById("form-status").innerHTML = "✅ Message sent successfully!";
        document.getElementById("contact-form").reset();
      }, function (error) {
        document.getElementById("form-status").innerHTML = "❌ Failed to send message.";
        console.error("FAILED...", error);
      });
  });








 
