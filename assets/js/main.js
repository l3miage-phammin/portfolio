/*===== MENU SHOW =====*/ 

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 1200,
    delay: 100,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .study__subtitle, .skills__img',{delay: 400}); 
sr.reveal('.study__img',{delay: 200});
sr.reveal('.home__social-icon',{ interval: 150}); 
sr.reveal('.skills__data, .work__img',{interval: 200});

