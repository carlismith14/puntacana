const navToggle = document.querySelector('.header__nav-toggle');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__li')

navToggle.addEventListener('click', function(){
    nav.classList.toggle('active');
});


// nav.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = e.target;
//     if (target.classList.contains('link--a')) {
//         const id = target.getAttribute('href').slice(1);
//         document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//     }
// });

const removeActive = function(){
    nav.classList.remove('active');
}

navLink.forEach(link => link.addEventListener('click', function(){
    
    setTimeout(removeActive, 500);
    
}));






// Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}