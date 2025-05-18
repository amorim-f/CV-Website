const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("#menu-navbar a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuLinks.forEach(link => link.classList.remove("active"));
            const id = entry.target.id;
            const activeLink = document.querySelector(`#menu-navbar a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));

const toggleButton = document.getElementById('menu-toggle');
const navbar = document.getElementById('menu-navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
