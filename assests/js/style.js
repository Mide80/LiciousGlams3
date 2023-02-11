/*------------------------------------------SHOW MENU-------------------------*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nave = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav')

/*--------------------------------RECOVER MENU MOBILE ------------------------------*/
const navLink = document.querySelectorAll('.nav_link')
const navClose = document.querySelectorAll('.close')
function linkAction() {
    const navMenu = document.getElementById('nav')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
 
/*==============================DEIX o LINK  ===================*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

function scrollHeader(){
    const scrollHeader=document.getElementById('header')
    if(this.scrollY >= 100)scrollHeader.classList.add('scroll-header');else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)