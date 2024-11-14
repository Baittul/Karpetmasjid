let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down - hide navbar
        navbar.style.top = "-70px";
    } else {
        // Scroll up - show navbar
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
