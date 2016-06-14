target1 = document.getElementsByClassName("colorido"), target2 = document.getElementsByClassName("colorido-o"), target3 = document.getElementsByClassName("colorido-t"), max = config.choice.length, time = 1e3 * config.autoDuration, trans = 1 - config.opacity, animD = " " + config.animationDuration + "s ", animT = config.animationType, config.autoChange ? (renc(), setInterval(renc, time)) : renc(), config.chrometab && (metaIn("theme-color"), metaIn("msapplication-navbutton-color"), metaIn("apple-mobile-web-app-status-bar-style"));

function renc() {
	var t = parseInt(Math.random() * (max - 0) + 0);
	color = config.choice[t], conv = color.replace("b", "ba"), trans_color = conv.replace(")", "," + trans);
	var e;
	for (e = 0; e < target1.length; e++) target1[e].style.backgroundColor = color, target1[e].style.color = "#fff", target1[e].style.transition = "background-color" + animD + animT;
	for (e = 0; e < target2.length; e++) target2[e].style.backgroundColor = trans_color, target2[e].style.transition = "background-color" + animD + animT;
	for (e = 0; e < target3.length; e++) target3[e].style.color = color, target3[e].style.transition = "color" + animD + animT
}

function metaIn(t) {
	var e = document.createElement("meta");
	e.name = t, e.content = config.choice[rand], document.getElementsByTagName("head")[0].appendChild(e)
}