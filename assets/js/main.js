
// -----------------type js---------------
var typed = new Typed('.typing', {
    strings: ['UI/UX designer', 'Frontend-Developer','Graphic Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay:1000,
    loop: true
  });
//   -----------------about toggle-----------------------
  var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab');
}
// ------------------active nav-------------
var navlinks = document.getElementsByClassName("nav-links");
function activelink(event){
    for (navlink of navlinks) {
        navlink.classList.remove('active-nav');
    }
    event.currentTarget.classList.add('active-nav');
}
// ---------------------scroll js---------------------
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
    origin:'top',
});
// ------------------scroll js header section----------------
ScrollReveal().reveal('.hero-text, .hero-content',{ origin:'top'});
ScrollReveal().reveal('.social-icons',{ delay:600});
ScrollReveal().reveal('.btn',{delay:1200});
// ---------------scroll js about section------------
ScrollReveal().reveal('.about-col-1 ',{ origin:'left'});
ScrollReveal().reveal('.about-col-2', { delay: 600 , origin:'left'});
// -----------scroll js portfolio section--------------
ScrollReveal().reveal('.one',{origin:'bottom'});
ScrollReveal().reveal('.two',{origin:'bottom' , delay:300});
ScrollReveal().reveal('.three',{origin:'bottom' , delay:600});
// --------------scroll js contact section-------------
ScrollReveal().reveal('.contact-left',{origin:'left'});
ScrollReveal().reveal('.contact-right',{origin:'right'});


// -------------------------newsletter google form------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbwDctC729_R702VKa1K10pCXUDLWhWY2Se379rjuQvYOHcdMidrWw85uGySelK3b4_HzA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const spinner = document.getElementById("spinner");

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show spinner
  submitBtn.disabled = true;
  btnText.textContent = "Sending";
  spinner.style.display = "inline-block";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  })
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    msg.innerHTML = "✅ Message sent successfully!";
    form.reset();
  })
  .catch(error => {
    console.error('Error!', error.message);
    msg.innerHTML = "❌ Failed to send message. Please try again.";
  })
  .finally(() => {
    // Hide spinner and reset button
    submitBtn.disabled = false;
    btnText.textContent = "Send";
    spinner.style.display = "none";

    setTimeout(() => { msg.innerHTML = ""; }, 5000);
  });
});

// -----------------menu toggle-----------------
const menu = document.getElementById("menu")

function openmenu(){
    menu.style.right = '0'
}
function closemenu(){
    menu.style.right = '-200px';
}
function working(){
    window.alert("project under maintenance")
}
