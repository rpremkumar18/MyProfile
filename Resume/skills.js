var a=0;
var b=0;

function hide(){
		document.getElementById("devskilldiv").style.display="none";
		document.getElementById("adminskilldiv").style.display="none";
		a=0;
		b=0;
}
function devskill(){
	if(a==0){
	document.getElementById("devskilldiv").style.display="block";
	document.getElementById("adminskilldiv").style.display="none";
	a++;
	b=0;
	}
	else
	{
		hide();
	}
}
function adminskill(){
	if(b==0)
	{
		document.getElementById("adminskilldiv").style.display="block";
		document.getElementById("devskilldiv").style.display="none";
		b++;
		a=0;
	}
	else
	{
		hide();
	}
}
