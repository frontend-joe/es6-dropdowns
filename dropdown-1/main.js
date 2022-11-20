const handleDropdownClicked = (event) => {
  event.stopPropagation();
  const dropdown = document.getElementById("dropdown");
  toggleDropdown(!dropdown.classList.contains("open"));
};

const toggleDropdown = (shouldOpen) => {
  const dropdown = document.getElementById("dropdown");
  const icon = document.getElementById("icon");

  if (shouldOpen) {
    dropdown.classList.add("open");
  } else {
    dropdown.classList.remove("open");
  }

  icon.innerText = dropdown.classList.contains("open")
    ? "close"
    : "expand_more";
};

document.body.addEventListener("click", () => toggleDropdown());
