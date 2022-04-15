// toggle

const navToggle = document.querySelector('.toggle');
const sideMenu = document.querySelector('.sideMenu');

navToggle.addEventListener('click', () => {
    sideMenu.classList.toggle("show-links");
});


// back to top
const scrollToTopButton = document.querySelector('.backTop');
const scrollFunc = () => {

  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "backTop show";
  } else {
    scrollToTopButton.className = "backTop hide";
  }
};

window.addEventListener("scroll", scrollFunc);

// const scrollToTop = () => {
//   const c = document.documentElement.scrollTop || document.body.scrollTop;
//   if (c > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     window.scrollTo(0, c - c / 10);
//   }
// };

// scrollToTopButton.onclick = function(e) {
//   e.preventDefault();
//   scrollToTop();
// }

