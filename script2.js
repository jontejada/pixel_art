document.body.style.margin = '0px';
var boxSize = window.innerWidth / 40;
var rows = Math.floor(window.innerHeight / boxSize) - 2;
var columns = 40;

// var boxSize = window.innerWidth * 0.02;
// var rows = Math.floor(window.innerHeight / (window.innerWidth * 0.02));
// var columns = Math.floor(window.innerWidth/boxSize);

function makeBox (whatClass,whatColor) {
	var box = document.createElement('div');
	box.className = whatClass;
	box.style.backgroundColor = whatColor;
	box.style.width = boxSize+'px';
	box.style.height = boxSize+'px';
	box.style.cssFloat = 'left';
	box.style.border = '0px';
	document.body.appendChild(box);
}

for (var i = 0; i < rows*columns; i++) {
	makeBox('paper','white');
}

var paperDivs = document.getElementsByClassName('paper');

var paintbrush = 'white';

var paint = function(event) {
	event.target.style.backgroundColor = paintbrush;
};

for (var i = 0; i < paperDivs.length; i++) {
	paperDivs[i].addEventListener('mouseover', paint);
}


var colorList = [
'darkred','firebrick','crimson','red','orangered','tomato','coral','darkorange','orange','lightsalmon','lightcoral',
'limegreen','lime','lawngreen','greenyellow','lightgreen','forestgreen','green','darkgreen',
'lightsteelblue','lightblue', 'skyblue','lightskyblue','deepskyblue','dodgerblue','cornflowerblue','steelblue','royalblue','blue','mediumblue','darkblue','navy','midnightblue',
'gainsboro','lightgrey','silver','darkgrey','gray','dimgray','black'
];

for (var i = 0; i < colorList.length; i++) {
	makeBox('paint',colorList[i]);
}
var pallet = document.getElementsByClassName('paint');


var changePaintbrush = function(event) {
	paintbrush = event.target.style.backgroundColor;
	document.body.style.backgroundColor = paintbrush;
};

for (var i = 0; i < pallet.length; i++) {
	pallet[i].addEventListener('mouseover', changePaintbrush);
}

var paintArea = function(event) {
	event.target.nextSibling.style.backgroundColor = paintbrush;
	event.target.previousSibling.style.backgroundColor = paintbrush;
	console.log(event.target.indexValue);
	paperDivs[event.target.indexValue-41].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue-40].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue-39].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue+39].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue+40].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue+41].style.backgroundColor = paintbrush;

};

var paintAll = function(event) {
	for (var i = 0; i < paperDivs.length; i++) {
		if (paperDivs[i].style.backgroundColor === 'white') {
			paperDivs[i].style.backgroundColor = paintbrush;
		}
	}
};

for (var i = 0; i < paperDivs.length; i++) {
	paperDivs[i].indexValue = i;
	paperDivs[i].addEventListener('click', paintArea);
	paperDivs[i].addEventListener('dblclick', paintAll);
}


