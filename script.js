//your JS code here. If required.
let content = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
	content.innerHTML = "<h1>Entered Metaverse</h1>";
})