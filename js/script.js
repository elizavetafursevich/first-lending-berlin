window.addEventListener('scroll', function (e) {
    let nav = document.getElementById('header');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('header-colored');
        nav.classList.remove('header-transparent');
    }else {
        nav.classList.add('header-transparent');
        nav.classList.remove('header-colored');
    }
});



