document.addEventListener("DOMContentLoaded", function () {
	var header = document.getElementById("myHeader");
	var page = document.getElementById("page");
	var openMenuButton = document.getElementById("openmenu");

	window.addEventListener("scroll", function () {
		page.classList.remove("menuopen");
		if (window.scrollY >= 100) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	});

	// Event listener to remove the sticky class when the button is clicked
	openMenuButton.addEventListener("click", function () {
		header.classList.remove("sticky");
		page.classList.add("menuopen");
	});

	var links = document.querySelectorAll('a[href^="#"]');

	links.forEach(function (link) {
		link.addEventListener("click", function (event) {
			// Prevent the default action
			event.preventDefault();

			// Get the target element
			var targetId = this.getAttribute("href");
			var targetElement = document.querySelector(targetId);

			// Smooth scroll to target
			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
				});
			}
		});
	});
});

//scroll parallax

class ParallaxCard {
	constructor(cardEl) {
		this.cardEl = cardEl;
		this.imageWrapper = cardEl.querySelector(".card__image-wrapper");
		this.heightDiff = this.imageWrapper.clientHeight - this.cardEl.clientHeight;
        this.update();
	}

	update() {
        
		const boundingRect = this.cardEl.getBoundingClientRect();
		const topOffset = boundingRect.y;
		const progress = topOffset / window.innerHeight;
		const offset = this.heightDiff * progress * -1;
		this.imageWrapper.style.transform = `translate(0, ${offset}px)`;
	}
}

function initCardParallax() {
	const cardEls = document.querySelectorAll(".prlx");
	const cards = Array.from(cardEls).map((cardEl) => new ParallaxCard(cardEl));

	function update() {
		cards.forEach((card) => card.update());
	}

	function onScroll() {
		requestAnimationFrame(update);
	}

	window.addEventListener("scroll", onScroll);
	requestAnimationFrame(update);
}

initCardParallax();

function myfunc(){
	alert("Thank you for your registering. We will get back to you soon with your time slot.");
}