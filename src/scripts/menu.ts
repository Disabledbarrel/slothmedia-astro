const hamburger = document.querySelector<HTMLDivElement>(".hamburger");
const navLinks = document.querySelector<HTMLDivElement>(".nav-links");

if (hamburger && navLinks) {
	hamburger.addEventListener("click", () => {
		navLinks.classList.toggle("expanded");
	});
}
