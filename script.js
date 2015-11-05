document.body.style.margin = '0px';
var boxSize = window.innerWidth * 0.02;
var rows = Math.floor(window.innerHeight / (window.innerWidth * 0.02));
var columns = Math.floor(window.innerWidth/boxSize);

function makeBox (whatClass,whatColor) {
	var box = document.createElement('div');
	box.className = whatClass;
	box.style.backgroundColor = whatColor;
	box.style.width = boxSize+'px';
	box.style.height = boxSize+'px';
	box.style.cssFloat = 'left';
	//box.style.margin = '0px';
	box.style.borderStyle = 'solid';
	box.style.borderColor = 'grey';
	box.style.borderLeftWidth = '1px';
	box.style.borderTopWidth = '1px';
	box.style.borderRightWidth = '0px';
	box.style.borderBottomWidth = '0px';
	document.body.appendChild(box);
}

for (var i = 0; i < 0.8*rows*columns; i++) {
	makeBox('paper','white');
}

var paperDivs = document.getElementsByClassName('paper');

var paintbrush = '';

for (var i = 0; i < paperDivs.length; i++) {
	paperDivs[i].addEventListener('mouseover', function(event) { //mouseover or click
		event.target.style.backgroundColor = paintbrush;
	});
}

makeBox('paint','white');
makeBox('paint','silver');
makeBox('paint','gray');
makeBox('paint','black');
makeBox('paint','red');
makeBox('paint','maroon');
makeBox('paint','yellow');
makeBox('paint','olive');
makeBox('paint','lime');
makeBox('paint','green');
makeBox('paint','aqua');
makeBox('paint','teal');
makeBox('paint','blue');
makeBox('paint','navy');
makeBox('paint','fuchsia');
makeBox('paint','purple');


var pallet = document.getElementsByClassName('paint');

for (var i = 0; i < pallet.length; i++) {
	pallet[i].addEventListener('mouseover', function(event) { //mouseover or click
		paintbrush = event.target.style.backgroundColor;
	});
}


