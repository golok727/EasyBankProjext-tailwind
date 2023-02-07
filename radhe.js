const ham = document.querySelector("[data-ham-burger]");
const menu = document.querySelector("[data-mob-nav-container]");
const close = document.querySelector("[data-close]");

ham.addEventListener("click", () => {
	ham.classList.add("hide");
	close.classList.remove("hide");
	menu.classList.remove("hide");
});
close.addEventListener("click", () => {
	ham.classList.remove("hide");
	close.classList.add("hide");
	menu.classList.add("hide");
});

menu.addEventListener("click", (e) => {
	if (e.target.id === "dark-bg") {
		ham.classList.remove("hide");
		close.classList.add("hide");
		menu.classList.add("hide");
	}
});
