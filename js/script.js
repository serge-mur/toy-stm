document.addEventListener('DOMContentLoaded', function(event) {

    const mediaQueryMobile = window.matchMedia('(max-width: 992px)')
    function mediaChange(e) {
        if (e.matches) {
            // console.log('mobile!')
            document.querySelector("body").setAttribute("data-bs-target", ".side-navbar");
        } else {
            // console.log('desktop!')
            document.querySelector("body").setAttribute("data-bs-target", ".top-navbar");
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

const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasMenu')
const mobMenuItems = document.querySelectorAll(".side-navbar .nav-link")
mobMenuItems.forEach((el) => {
    el.addEventListener('click', function() { 
        bsOffcanvas.hide()
    })
});
