document.addEventListener('DOMContentLoaded', function(event) {

    const mediaQueryMobile = window.matchMedia('(max-width: 576px)')
    function mediaChange(e) {
        if (e.matches) {
            console.log('mobile!')
        } else {
            console.log('desktop!')  
        }
    }
    mediaQueryMobile.addListener(mediaChange)
    mediaChange(mediaQueryMobile)

})

let scrollpos = window.scrollY
const header = document.querySelector(".top-navbar")
const scrollChange = 130
window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= scrollChange) {
        header.classList.add("navbar-bg")
    }
    else {
        header.classList.remove("navbar-bg")
    }
})

// const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasMenu')
// const mobMenuItems = document.querySelectorAll(".side-navbar .nav-link")
// mobMenuItems.forEach((el) => {
//     el.addEventListener('click', function() { 
//         bsOffcanvas.hide()
//     })
// });
