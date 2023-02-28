var typed = new Typed(".multiple-text", {
    strings:["Fronted Geliştiricisiyim","YouTuberim","E-sporcuyum"],
    typeSpeed:60,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

const offset = 50;

menBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
    if (pageXOffset > offset) {
        
        navbar.classList.add('navbar-active');
    } else{
        
        navbar.classList.remove('navbar-active');
    }
})

$(window).on('load',function(){
    $(".loader").fadeOut(1000);
    $(".content").fadeIn(8000);
});