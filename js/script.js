let info, radio, isStarted, canvStart;

function init () {
	isStarted=false;
	radio=new Radio();
	var play=document.getElementById("play");
	play.onclick=action;
	var n=document.getElementById("next");
	n.onclick=next;
	var pr=document.getElementById("prev");
	pr.onclick=prev;
	info=document.getElementById("info");
	isStarted=false;
	canvStart=false;
}



function action(){
	radio.togglePlay();
	info.innerHTML=radio.info();
	check();
}

function next(){	
	radio.n();
	info.innerHTML=radio.info();
	check();
}

function prev(){
	radio.pr();
	info.innerHTML=radio.info();
	check();
}

function set1(){
	radio.setStation(0);
	info.innerHTML=radio.info();
	check();
	isStarted=true;
}

function set2(){
	radio.setStation(1);
	info.innerHTML=radio.info();
	check();
	isStarted=true;
}

function set3(){
	radio.setStation(2);
	info.innerHTML=radio.info();
	check();
	isStarted=true;
}

function set4(){
	radio.setStation(3);
	info.innerHTML=radio.info();
	check();
	isStarted=true;
}

function set5(){
	radio.setStation(4);
	info.innerHTML=radio.info();
	check();
	isStarted=true;
}

function stations(){
	if(!isStarted)
	{
		var l=document.getElementById("l");
		for (var i=0; i<5; ++i)
		{
			var pp=document.createElement('p');
			var b1=document.createElement('button');
			b1.innerHTML=radio.getName(i);
			pp.id=i;
			b1.classList.add("button2");
			switch (i) {
				case 0:
					b1.addEventListener( "click" , set1);
					break;
					case 1:
					b1.addEventListener( "click" , set2);
					break;
					case 2:
					b1.addEventListener( "click" , set3);
					break;
					case 3:
					b1.addEventListener( "click" , set4);
					break;
					case 4:
					b1.addEventListener( "click" , set5);
					break;
				default:
					// statements_def
					break;
			}
			pp.append(b1);
			l.append(b1);		
		}
		isStarted=true;
	}
	else{
		var del=document.getElementById("l");
		del.innerHTML=null;
		isStarted=false;
	}
}

function check(){
	if (!canvStart)
		change();
}

function setDark(){
	document.getElementById("prev").style.background = 'black';
	document.getElementById("prev").style.color = 'white';
	document.getElementById("play").style.background = 'black';
	document.getElementById("play").style.color = 'white';
	document.getElementById("next").style.background = 'black';
	document.getElementById("next").style.color = 'white';
}

function setWhite(){
	document.getElementById("prev").style.background = '#dce2df';
	document.getElementById("prev").style.color = 'black';
	document.getElementById("play").style.background = '#dce2df';
	document.getElementById("play").style.color = 'black';
	document.getElementById("next").style.background = '#dce2df';
	document.getElementById("next").style.color = 'black';
}



window.onload = ()=>{	init(); };