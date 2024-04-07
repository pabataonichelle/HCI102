document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbarrr');
    const menu = document.querySelector('.navbar');

    navbar.addEventListener('click', function () {
        menu.classList.toggle('show'); // Toggle the class directly on the ul element
    });
});
