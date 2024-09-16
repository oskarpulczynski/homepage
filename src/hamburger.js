const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
	const navigation = document.querySelector(".header__navigation--js");
	navigation.classList.toggle("header__navigation--open");
});
