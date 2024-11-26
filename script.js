function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const container = document.querySelector('.projects-container');

scrollLeft.addEventListener('click', () => {
  container.scrollBy({
    left: -container.offsetWidth / 2, // Scroll left by half the container width
    behavior: 'smooth',
  });
});

scrollRight.addEventListener('click', () => {
  container.scrollBy({
    left: container.offsetWidth / 2, // Scroll right by half the container width
    behavior: 'smooth',
  });
});
