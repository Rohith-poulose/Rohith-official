
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
const scriptURL = 'https://script.google.com/macros/s/AKfycbzl15JFDIfBJv3Iez2ReS_9ql_bIKbeIE7PJERblO70rDTWFKXkR7aVrSwuS-eUUtqp/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout (function(){
            msg.innerHTML="";
        },5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
// -----------------menu toggle-----------------
const menu = document.getElementById("menu")

function openmenu(){
    menu.style.right = '0'
}
function closemenu(){
    menu.style.right = '-200px';
}