const menu = document.getElementById("menu"),
  chevron = document.getElementById("chevron");

const toggleDropdown = () => {
  menu.classList.toggle("open");
  chevron.innerHTML = !menu.classList.contains("open")
    ? "expand_more"
    : "close";
};

const handleMainButtonClicked = () => alert("Main button clicked!");

const handleMenuButtonClicked = () => {
  toggleDropdown();
  alert("Menu button clicked!");
};
