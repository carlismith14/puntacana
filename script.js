const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navvb');

navToggle.addEventListener('click', function(){
    nav.classList.toggle('active');
});