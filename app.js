const navBtn = document.querySelector('#nav-btn');
const navList = document.querySelector('#navlist');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible');
    if (visibility === 'false') {
        navList.setAttribute('data-visible', 'true');
        navBtn.style.color='white';
    } else {
        navList.setAttribute('data-visible', 'false');
        setTimeout(() => {
            navBtn.style.color='#00BDAA';
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
            navBtn.style.color='#00BDAA';
        }, 300);
    })
}