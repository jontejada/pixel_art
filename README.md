#[pixel art live site](http://jontejada.com/pixel_art)

##setup
```javascript
document.body.style.margin = '0px';
var columns = 40;
var boxSize = window.innerWidth / columns;
var rows = Math.floor(window.innerHeight / boxSize) - 2;
```

##create, style and append a new pixel (div)
```javascript
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
```

##making a blank sheet of paper
```javascript
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
	paperDivs[i].addEventListener('mousedown', startRect);
	paperDivs[i].addEventListener('mouseup', endRect);
}
```

##building the color pallet
```javascript
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
```

##on single click
```javascript
var paintArea = function(event) {
	event.target.nextSibling.style.backgroundColor = paintbrush;
	event.target.previousSibling.style.backgroundColor = paintbrush;
	console.log(event.target.indexValue);
	paperDivs[event.target.indexValue-columns+1].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue-columns].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue-columns-1].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue+columns-1].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue+columns].style.backgroundColor = paintbrush;
	paperDivs[event.target.indexValue+columns+1].style.backgroundColor = paintbrush;

};
```

##on double click
```javascript
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
```

##text bar
```javascript
var textBar = document.createElement('div');
textBar.style.fontFamily = 'sans-serif';
textBar.style.fontWeight = 'bold';
textBar.style.color = 'white';
textBar.style.padding = '10px';
textBar.style.fontSize = "40px";
textBar.innerHTML = ' ';
document.body.appendChild(textBar);


##reset button
```javascript
var reset = document.createElement('span');
reset.innerHTML = 'RESET ';
reset.addEventListener('click',doReset);
textBar.appendChild(reset);
	
function doReset() {
	for (var i = 0; i < paperDivs.length; i++) {
		paperDivs[i].style.backgroundColor = 'white';
	}
}
```

##growL button
```javascript
var growL = document.createElement('span');
growL.innerHTML = '&larr; ';
growL.title = 'keyboard arrows work too';
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
```

##growUp button
```javascript
var growUp = document.createElement('span');
growUp.innerHTML = '&uarr; ';
growUp.title = 'keyboard arrows work too';
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
			paperDivs[matches[j]-columns].style.backgroundColor = paintbrush;
		}
		catch (err) {
			console.log("fell off the edge! " + err);
		}
	}
}	
```

##growR button
```javascript
var growR = document.createElement('span');
growR.innerHTML = '&rarr; ';
growR.title = 'keyboard arrows work too';
growR.addEventListener('click',doGrowR);
textBar.appendChild(growR);

function doGrowR() {
	var matches = [];
	for (var i = 0; i < paperDivs.length; i++) {
		if (paperDivs[i].style.backgroundColor === paintbrush) {
			matches.push(i);
		}
	}
	for (var j = 0; j < matches.length; j++) {
		try {
			paperDivs[matches[j]+1].style.backgroundColor = paintbrush;
		}
		catch (err) {
			console.log("fell off the edge! " + err);
		}
	}
}
```

##growDown button
```javascript
var growDown = document.createElement('span');
growDown.innerHTML = '&darr; ';
growDown.title = 'keyboard arrows work too';
growDown.addEventListener('click',doGrowDown);
//growDown.addEventListener('mouseover',hoverTip);
textBar.appendChild(growDown);

function doGrowDown() {
	var matches = [];
	for (var i = 0; i < paperDivs.length; i++) {
		if (paperDivs[i].style.backgroundColor === paintbrush) {
			matches.push(i);
		}
	}
	for (var j = 0; j < matches.length; j++) {
		try {
			paperDivs[matches[j]+columns].style.backgroundColor = paintbrush;
		}
		catch (err) {
			console.log("fell off the edge! " + err);
		}
	}
}	
```

##arrow keys
```javascript
window.addEventListener('keydown',checkKeydown,false);

function checkKeydown(e) {
	switch (e.keyCode) {
		case 37:
			doGrowL();
			break;
		case 38:
			doGrowUp();
			break;
		case 39:
			doGrowR();
			break;
		case 40:
			doGrowDown();
			break;
	}
}
```

##fill button
```javascript
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
```

##rectangle maker
ONLY WORKS for topleft to bottomright (or reverse) rectangles
```javascript
var a;
function startRect(event) {
	a = event.target.indexValue;
}

function endRect(event) {
	var b = event.target.indexValue;
	var startR = Math.min(a,b);
	var endR = Math.max(a,b);
	var heightR = Math.ceil((endR-startR)/columns);
	var indexR = [];
	var widthR = endR - ( startR + ( ( heightR - 1 ) * columns ) );
	for (var i = 0; i < heightR; i++) {
		for (var j = 0; j <= widthR; j++) {
			var indexValue = startR+(i*columns)+j;
			indexR.push(indexValue);
		}
	}
	for (var k = 0; k < indexR.length; k++) {
		paperDivs[indexR[k]].style.backgroundColor = paintbrush;
	}
	console.log(indexR);
}
```