

window.onload = function(){
	//alert("hi");
 //var theDiv = document.getElementById('home');
  //     theDiv.style.display = "block";
  document.getElementById("home").style.display="block";
}

function aboutdiv(){
	document.getElementById("home").style.display="block";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("skill").style.display="none";
	document.getElementById("edu").style.display="none";
	document.getElementById("contact").style.display="none";
}


function expdiv(){
	document.getElementById("home").style.display="none";
	document.getElementById("exp").style.display="block";
	document.getElementById("cert").style.display="none";
	document.getElementById("skill").style.display="none";
	document.getElementById("edu").style.display="none";
	document.getElementById("contact").style.display="none";
}

function certdiv(){
	document.getElementById("home").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="block";
	document.getElementById("skill").style.display="none";
	document.getElementById("edu").style.display="none";
	document.getElementById("contact").style.display="none";
}
function skilldiv(){
	document.getElementById("home").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("skill").style.display="block";
	document.getElementById("edu").style.display="none";
	document.getElementById("contact").style.display="none";
	document.getElementById("adminskilldiv").style.display="none";
	document.getElementById("devskilldiv").style.display="none";
		
}
function edudiv(){
	document.getElementById("home").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("skill").style.display="none";
	document.getElementById("edu").style.display="block";
	document.getElementById("contact").style.display="none";
}
function contactdiv(){
	document.getElementById("home").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("skill").style.display="none";
	document.getElementById("edu").style.display="none";
	document.getElementById("contact").style.display="block";
}