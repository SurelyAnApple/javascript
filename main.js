const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

let card = document.querySelectorAll(".card__inner");

card.forEach((link) => {
    link.addEventListener('click', function (e) {
        this.classList.toggle('is-flipped');
    });
});
