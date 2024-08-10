const intervalID = setInterval(clock, 1000);
function clock() {
	document.querySelector("input").value = new Date().toLocaleTimeString();
}

document.addEventListener("DOMContentLoaded", clock);
