const navToggle = document.querySelector('.hamburger'),
      navMenu = document.querySelector('.header_nav');

// nav btn(hamburger) toggle
navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('open');
})

// header menu click event
navMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('open');
})

