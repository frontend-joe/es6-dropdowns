const menuButtons = document.querySelectorAll(".menu-buttons button");

const toggleMenuOpen = (value) => {
  document.body.classList.toggle("open", value);
};

const swiper = new Swiper(".swiper-menu", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
});

swiper.on("slideChange", (swiper) =>
  menuButtons.forEach((button, index) =>
    button.classList.toggle("active", index === swiper.realIndex)
  )
);

const toggleMenuBlock = (button, index) => {
  menuButtons.forEach((button) => button.classList.remove("active"));
  button.classList.toggle("active");
  swiper.slideTo(index);
};
