// 1- toogle nav with menu
let bar = document.getElementById('bar');
let navBar = document.getElementById('nav');

if (window.innerWidth < 1000) {
    navBar.style.display = 'none';  
    bar.style.display = 'block';   
} else {
    navBar.style.display = 'block';  
    bar.style.display = 'none';     
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
        navBar.style.display = 'none'; 
        bar.style.display = 'block';  
    } else {
        navBar.style.display = 'block';  
        bar.style.display = 'none';  
    }
});

//2- change main images 
const mainSrc = ['images/main1.png', 'images/main2.png', 'images/main3.png'];
let mainImg = document.getElementById('mainImg');
let myHeader = document.getElementById('header');

let currentIndex = 0;

setInterval(() => {
    mainImg.src = mainSrc[currentIndex]; 
    myHeader.style.backgroundImage = `url(${mainSrc[currentIndex]})`; 
    currentIndex = (currentIndex + 1) % mainSrc.length; 
}, 3500);


// 3- Up

let upBtn = document.getElementById('up')

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        upBtn.style.display = 'flex'; 
    } else {
        upBtn.style.display = 'none';   
    }
});

upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
});

// 4- mobile menue

let mobileMenu = document.getElementById('mobileMenu'); 
let closeBtn = document.getElementById('close-btn'); 
function showMenu() {
    mobileMenu.classList.toggle('active'); 
}
function hideMenu() {
    mobileMenu.classList.remove('active'); 
}
bar.addEventListener('click', showMenu); 
closeBtn.addEventListener('click', hideMenu); 

