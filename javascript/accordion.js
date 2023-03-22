//accordion voor New York
const acc = document.querySelectorAll(".accordion");

acc.forEach((button) =>
	button.addEventListener("click", function () {
		this.classList.toggle("active-accordion");

		const panel = this.nextElementSibling;
		panel.style.display === "block"
			? (panel.style.display = "none")
			: (panel.style.display = "block");
	})
);

//accoodion voor Parijs
const acc2 = document.querySelectorAll(".accordion2");

acc2.forEach((button) =>
	button.addEventListener("click", function () {
		this.classList.toggle("active-accordion2");

		const panel = this.nextElementSibling;
		panel.style.display === "block"
			? (panel.style.display = "none")
			: (panel.style.display = "block");
	})
);

//accordion voor Tokyo
const acc3 = document.querySelectorAll(".accordion3");

acc3.forEach((button) =>
	button.addEventListener("click", function () {
		this.classList.toggle("active-accordion3");

		const panel = this.nextElementSibling;
		panel.style.display === "block"
			? (panel.style.display = "none")
			: (panel.style.display = "block");
	})
);
