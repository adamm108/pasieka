window.addEventListener('scroll', function() {
    var items = document.querySelectorAll('.item');
    var windowHeight = window.innerHeight;

    items.forEach(function(item) {
        var position = item.getBoundingClientRect();

        if(position.top <= windowHeight) {
            item.style.opacity = 1;
            console.log("działa");
        }
    });
});
window.addEventListener('scroll', function() {
    var items = document.querySelectorAll('.item');
    var windowHeight = window.innerHeight;

    items.forEach(function(item) {
        var position = item.getBoundingClientRect();

        if(position.top <= windowHeight && !item.classList.contains('item-animate')) {
            item.classList.add('item-animate');
        }
    });
});
window.addEventListener('scroll', function() {
    var items = document.querySelectorAll('.item');
    var windowHeight = window.innerHeight;

    items.forEach(function(item) {
        var position = item.getBoundingClientRect();
        var itemMiddle = position.top + item.offsetHeight / 2; // Oblicza środek elementu

        if(itemMiddle <= windowHeight) {
            // Dodaj klasę lub zmień style dla animacji
            item.classList.add('item-animate');
            
        }
    });
});
function toggleMenu() {
    var menu = document.getElementsByClassName("menu")[0];
    menu.classList.toggle("expanded");
}

document.addEventListener('click', function(event) {
    var menu = document.getElementsByClassName("menu")[0];
    var hamburgerIcon = document.getElementsByClassName("hamburger")[0]; // Poprawka tutaj
    var isClickInsideMenu = menu.contains(event.target);
    var isClickOnHamburgerIcon = hamburgerIcon && hamburgerIcon.contains(event.target); // Dodaj sprawdzenie, czy hamburgerIcon istnieje

    if (!isClickInsideMenu && !isClickOnHamburgerIcon) {
        toggleMenu();
    }
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.icon'); // Zakładając, że istnieje taki element

    if (window.scrollY > 10) {
        nav.style.width = '60px';
        icon.style.display = 'none';
    } else {
        nav.style.width = '150px';
        icon.style.display = 'block';
    }
});






