document.body.style.margin = '0px';
var boxSize = window.innerWidth / 40;
var rows = Math.floor(window.innerHeight / boxSize) - 2;
var columns = 40;

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

//making a blank sheet of paper
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

//building the color pallet
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
	pallet[i].addEventListener('click', changePaintbrush);
}

//on single click
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

//on double click
var paintAll = function(event) {
	var currentBackground = paperDivs[0].style.backgroundColor;
	for (var i = 0; i < paperDivs.length; i++) {
		if (paperDivs[i].style.backgroundColor === currentBackground) {
			paperDivs[i].style.backgroundColor = paintbrush;
		}
	}
};

for (var i = 0; i < paperDivs.length; i++) {
	paperDivs[i].indexValue = i;
	paperDivs[i].addEventListener('click', paintArea);
	paperDivs[i].addEventListener('dblclick', paintAll);
}

//text bar
var textBar = document.createElement('div');
textBar.style.fontFamily = 'sans-serif';
textBar.style.fontWeight = 'bold';
textBar.style.color = 'white';
//textBar.style.padding = '10px';
textBar.style.fontSize = "40px";
textBar.innerHTML = 'ACTIONS: ';
document.body.appendChild(textBar);


//reset button
var reset = document.createElement('span');
reset.innerHTML = 'RESET ';
reset.addEventListener('click',doReset);
textBar.appendChild(reset);
	
function doReset() {
	for (var i = 0; i < paperDivs.length; i++) {
		paperDivs[i].style.backgroundColor = 'white';
	}
}

//growL button
var growL = document.createElement('span');
growL.innerHTML = 'GROWLEFT ';
growL.addEventListener('click',doGrowL);
textBar.appendChild(growL);
	
function doGrowL() {
	var matches = [];
	for (var i = 0; i < paperDivs.length; i++) {
		if (paperDivs[i].style.backgroundColor === paintbrush) {
			matches.push(i);
		}
	}
	for (var j = 0; j < matches.length; j++) {
		try {
			paperDivs[matches[j]-1].style.backgroundColor = paintbrush;
		}
		catch (err) {
			console.log("fell off the edge! " + err);
		}
	}
}

//growUp button
var growUp = document.createElement('span');
growUp.innerHTML = 'GROWUP ';
growUp.addEventListener('click',doGrowUp);
textBar.appendChild(growUp);
	
function doGrowUp() {
	var matches = [];
	for (var i = 0; i < paperDivs.length; i++) {
		if (paperDivs[i].style.backgroundColor === paintbrush) {
			matches.push(i);
		}
	}
	for (var j = 0; j < matches.length; j++) {
		try {
			paperDivs[matches[j]-40].style.backgroundColor = paintbrush;
		}
		catch (err) {
			console.log("fell off the edge! " + err);
		}
	}
}	

//fill button
var fill = document.createElement('span');
fill.innerHTML = 'FILL ';
fill.addEventListener('click',doFill);
textBar.appendChild(fill);
	
function doFill() {
	var currentBackground = paperDivs[0].style.backgroundColor;
	for (var i = 0; i < paperDivs.length; i++) {
		if (paperDivs[i].style.backgroundColor === currentBackground) {
			paperDivs[i].style.backgroundColor = paintbrush;
		}
	}
}

//rectangle maker
var a = 2;
var b = 26;
var positions = [a,b];

if (b>a) {

}



