var change = setInterval(text_change, 2000)
var div = document.querySelector(".hero-text")
var text = ["a ML enthusiast.","a web developer.","a feminist.", "an educator."]
var index = 0
var flag = true

function text_change() {
	document.documentElement.style.setProperty('--bgcolor',"black")
	if (index == text.length) {
		index = 0
		if (flag) {
		text.unshift("Japnit Ahuja.")
		flag = false
		}
	}
	else if (text[index] == "a feminist.") {
		document.documentElement.style.setProperty('--bgcolor',"#ff1979")
	}
	div.innerHTML = text[index];
	index += 1
}