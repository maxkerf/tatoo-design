/* Discover Button */

const discoverBtn = document.querySelector(".discover-btn");

discoverBtn.onclick = () => {
	window.scrollTo({
		top: window.innerHeight,
		behavior: "smooth",
	});
};

/* End Discover Button */

/* Scroll Top Button */

const scrollTopBtn = document.querySelector(".scroll-top-btn");

function manageScrollTopBtn() {
	// few offset for a cleaner entry
	if (window.scrollY < window.innerHeight - 200) {
		scrollTopBtn.classList.add("hidden");
		scrollTopBtn.setAttribute("disabled", "");
	} else {
		scrollTopBtn.classList.remove("hidden");
		scrollTopBtn.removeAttribute("disabled");
	}
}

manageScrollTopBtn();

scrollTopBtn.onclick = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

window.onscroll = manageScrollTopBtn;

/* End Scroll Top Button */
