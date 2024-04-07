let menu = document.querySelector(".burgerMenu"),
    visible = false,
    modal = document.querySelector("dialog");

menu.addEventListener("click", (e) => {
    e.preventDefault();
    visible = !visible;
    modal.classList.toggle("Active");
    menu.querySelector("img").src = visible ? "assets/images/Close.svg" : "assets/images/openMenu.svg"
})


