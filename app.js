const navBtn = document.querySelector('#nav-btn');
const navList = document.querySelector('#navlist');
const navLinks = document.querySelectorAll('.nav-link');

const hello = document.querySelector('.hello');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const icons = document.querySelector('.icons');
const scroll = document.querySelector('.scroll');

navBtn.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible');
    if (visibility === 'false') {
        navList.setAttribute('data-visible', 'true');
        navBtn.style.color='white';
    } else {
        navList.setAttribute('data-visible', 'false');
        setTimeout(() => {
            navBtn.style.color='#FF2ED9';
        }, 300);
    }
})

navList.addEventListener('click', () => {
        navList.setAttribute('data-visible', 'false');
})

for(let navLink of navLinks){
    navLink.addEventListener('click', ()=> {
        navList.setAttribute('data-visible', 'false');
        setTimeout(() => {
            navBtn.style.color='#FF2ED9';
        }, 300);
    })
}

setTimeout(()=> {
    hello.style.opacity='1';
}, 2200);

setTimeout(()=> {
    title.style.opacity='1';
}, 3200);

setTimeout(()=> {
    subtitle.style.opacity='1';
}, 3700);

setTimeout(()=> {
    icons.style.opacity='1';
}, 3700);

setTimeout(()=> {
    scroll.style.opacity='1';
}, 5000);