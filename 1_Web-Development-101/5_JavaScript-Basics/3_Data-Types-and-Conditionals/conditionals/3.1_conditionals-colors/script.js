const select = document.querySelector("select");
const html = document.querySelector("html");
const body = document.querySelector("body");
const heading = document.querySelector("h1");

select.addEventListener("change", () => {
	const choice = select.value;

	// ADD SWITCH STATEMENT
	switch (choice) {
		// white
		case "white":
			console.log("white selected");
			update("white", "black");
			break;
		// black
		case "black":
			console.log("black selected");
			update("black", "#f5f5f5");
			break;
		// purple
		case "purple":
			update("purple", "#f5f5f5");
			break;
		// yellow
		case "yellow":
			update("yellow", "black");
			break;
		// psychedelic
		case "psychedelic":
			update("pink", "purple");
			break;
	}

});

function update(bgColor, textColor) {
	html.style.backgroundColor = bgColor;
	body.style.backgroundColor = bgColor;
	heading.style.backgroundColor = bgColor;
	html.style.color = textColor;
}
