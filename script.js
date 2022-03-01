var loop;
var grados = 0;

rotateAnimation('circulo',2);


function rotateAnimation(item,speed){
	var elem = document.getElementById(item);
	elem.style.transform = "rotate("+grados+"deg)";
	loop = setTimeout('rotateAnimation(\''+item+'\','+speed+')',speed);

	if(grados < 359){
		grados++;
	}
	else{
		grados=1;
	}	
}
