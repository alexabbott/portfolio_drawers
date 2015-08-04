document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

var clicks = 0;
function changeOpacity() {
	document.getElementsByTagName("canvas")[0].style.opacity = "0.3";
};
function restoreOpacity() {
	document.getElementsByTagName("canvas")[0].style.opacity = "0.6";
};
function addTint() {
	document.getElementsByClassName("tint")[0].style.background = 
	"rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + "," + Math.random() * 0.8 + ")";
	clicks++;
	if (clicks % 2 != 0){
		document.getElementById("about").style.margin = "0";
		document.getElementById("portfolio").style.margin = "0";
		document.getElementById("experience").style.margin = "0";
		document.getElementById("education").style.margin = "0";
	}
	else {
		if (window.innerWidth >= 800){
			document.getElementsByClassName("leftPanel")[0].style.margin = "0 0 0 -250px";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 -250px 0 0";
		}
		else {
			document.getElementsByClassName("leftPanel")[0].style.margin = "-200px 0 0 0";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 0 -200px 0";
		}					
	}
};

var pClicks = 0;
function showPortfolioInner() {
	pClicks++;
	if (pClicks %2 != 0){
		if (window.innerWidth >= 800){
			document.getElementsByClassName("leftPanel")[0].style.margin = "0 0 0 -250px";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 -250px 0 0";
		}
		else {
			document.getElementsByClassName("leftPanel")[0].style.margin = "-200px 0 0 0";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 0 -200px 0";

		}
		setTimeout(function() {
			document.getElementById("portfolioInner").style.margin = "0";
		}, 500);

		setTimeout(function() {
			document.getElementById("portfolioItems").style.margin = "100px 0 0 2px";
		}, 700);
	}
	else {
		document.getElementById("portfolioInner").style.margin = "-200% 0 0 0";
		document.getElementById("portfolioItems").style.margin = "-3500px 0 0 2px";
		setTimeout(function() {
			document.getElementById("about").style.margin = "0";
			document.getElementById("portfolio").style.margin = "0";
			document.getElementById("experience").style.margin = "0";
			document.getElementById("education").style.margin = "0";
		}, 500);
	}
}

var exClicks = 0;
function showExperienceInner() {
	exClicks++;
	if (exClicks %2 != 0){
		if (window.innerWidth >= 800){
			document.getElementsByClassName("leftPanel")[0].style.margin = "0 0 0 -250px";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 -250px 0 0";
			document.getElementsByClassName("bottomPanel")[0].style.top = "0";
			document.getElementsByClassName("bottomPanel")[0].style.bottom = "auto";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0";
			document.getElementsByClassName("bottomPanel")[0].style.height = "50px";
			document.getElementsByClassName("bottomPanel")[0].style.boxShadow = "0 4px 5px -5px gray";
		}
		else {
			document.getElementsByClassName("leftPanel")[0].style.margin = "-200px 0 0 0";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 0 -200px 0";
			document.getElementsByClassName("bottomPanel")[0].style.top = "0";
			document.getElementsByClassName("bottomPanel")[0].style.bottom = "auto";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0";
			document.getElementsByClassName("bottomPanel")[0].style.height = "40px";
			document.getElementsByClassName("experiencetext")[0].style.marginTop = "-5px";
			document.getElementsByClassName("bottomPanel")[0].style.boxShadow = "0 4px 5px -5px gray";
		}
		setTimeout(function() {
			document.getElementById("experienceInner").style.margin = "0";
		}, 500);

		setTimeout(function() {
			document.getElementById("experienceItems").style.margin = "95px 0 0 2px";
		}, 700);
	}
	else {
		if (window.innerWidth >= 800){
			document.getElementById("experienceInner").style.margin = "200% 0 0 0";
			document.getElementById("experienceItems").style.margin = "0 0 -1500px 2px";
			document.getElementsByClassName("bottomPanel")[0].style.top = "auto";
			document.getElementsByClassName("bottomPanel")[0].style.bottom = "0";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 0 0";
			document.getElementsByClassName("bottomPanel")[0].style.height = "50px";
			document.getElementsByClassName("bottomPanel")[0].style.boxShadow = "0 -4px 5px -5px gray";
		}
		else {
			document.getElementById("experienceInner").style.margin = "200% 0 0 0";
			document.getElementById("experienceItems").style.margin = "0 0 -1500px 2px";
			document.getElementsByClassName("bottomPanel")[0].style.top = "auto";
			document.getElementsByClassName("bottomPanel")[0].style.bottom = "0";
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("bottomPanel")[0].style.height = "50px";
			document.getElementsByClassName("experiencetext")[0].style.marginTop = "0";
			document.getElementsByClassName("bottomPanel")[0].style.boxShadow = "0 -4px 5px -5px gray";
		}
		setTimeout(function() {
			document.getElementById("about").style.margin = "0";
			document.getElementById("portfolio").style.margin = "0";
			document.getElementById("experience").style.margin = "0";
			document.getElementById("education").style.margin = "0";
		}, 500);
	}
}

var aClicks = 0;
function showAboutInner() {
	aClicks++;
	if (aClicks %2 != 0){
		if (window.innerWidth >= 800){
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 -250px 0 0";
		}
		else {
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 0 -200px 0";
			document.getElementsByClassName("leftPanel")[0].style.height = "90px";
			document.getElementsByClassName("abouttext")[0].style.top = "110px";

		}
		setTimeout(function() {
			document.getElementById("aboutInner").style.margin = "0";
		}, 500);

		setTimeout(function() {
			document.getElementById("aboutItems").style.margin = "50px 0 0 2px";
			document.getElementById("name").style.opacity = "0";
			document.getElementById("contact").style.opacity = "0";
		}, 700);
	}
	else {
		if (window.innerWidth >= 800){
			document.getElementById("aboutInner").style.margin = "0 0 0 -200%";
			document.getElementById("aboutItems").style.margin = "50px 0 -1500px 2px";
		}
		else {
			document.getElementById("aboutInner").style.margin = "-500% 0 0 0";
			document.getElementById("aboutItems").style.margin = "0 0 -1500px 2px";
			document.getElementsByClassName("leftPanel")[0].style.height = "160px";
			document.getElementsByClassName("abouttext")[0].style.top = "183px";						
		}
		setTimeout(function() {
			document.getElementById("about").style.margin = "0";
			document.getElementById("portfolio").style.margin = "0";
			document.getElementById("experience").style.margin = "0";
			document.getElementById("education").style.margin = "0";
			document.getElementById("name").style.opacity = "1";
			document.getElementById("contact").style.opacity = "1";
		}, 500);
	}
}


var edClicks = 0;
function showEducationInner() {
	edClicks++;
	if (edClicks %2 != 0){
		if (window.innerWidth >= 800){
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("leftPanel")[0].style.margin = "0 0 0 -250px";
		}
		else {
			document.getElementsByClassName("bottomPanel")[0].style.margin = "0 0 -100px 0";
			document.getElementsByClassName("topPanel")[0].style.margin = "-100px 0 0 0";
			document.getElementsByClassName("leftPanel")[0].style.margin = "-200px 0 0 0";
			document.getElementsByClassName("rightPanel")[0].style.top = "0";
			document.getElementsByClassName("rightPanel")[0].style.bottom = "auto";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0";
			document.getElementsByClassName("rightPanel")[0].style.height = "80px";
			document.getElementsByClassName("usc")[0].innerHTML = "USC";
			document.getElementsByClassName("hkust")[0].innerHTML = "HKUST";
		}
		setTimeout(function() {
			document.getElementById("educationInner").style.margin = "0";
		}, 500);

		setTimeout(function() {
			document.getElementById("educationItems").style.margin = "100px 0 0 2px";
			document.getElementById("name").style.opacity = "0";
			document.getElementById("contact").style.opacity = "0";
		}, 700);
	}
	else {
		if (window.innerWidth >= 800){
			document.getElementById("educationInner").style.margin = "0 0 0 200%";
			document.getElementById("educationItems").style.margin = "100px 0 -1500px 2px";
		}
		else {
			document.getElementById("educationInner").style.margin = "-210% 0 0 0";
			document.getElementById("educationItems").style.margin = "0 0 -1500px 2px";	
			document.getElementsByClassName("rightPanel")[0].style.top = "auto";
			document.getElementsByClassName("rightPanel")[0].style.bottom = "0";
			document.getElementsByClassName("rightPanel")[0].style.margin = "0 0 -200px 0";
			document.getElementsByClassName("rightPanel")[0].style.height = "160px";
		}
		setTimeout(function() {
			document.getElementById("about").style.margin = "0";
			document.getElementById("portfolio").style.margin = "0";
			document.getElementById("experience").style.margin = "0";
			document.getElementById("education").style.margin = "0";
			document.getElementById("name").style.opacity = "1";
			document.getElementById("contact").style.opacity = "1";
		}, 500);
	}
}

function passWord() {
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password',' ');
	while (testV < 3) {
		if (!pass1) 
			history.go(-1);
		if (pass1.toLowerCase() == "letmein") {
			alert('You are in!');
			// window.open('protectpage.html');
			break;
		} 
		testV+=1;
		var pass1 = 
		prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
	}
	if (pass1.toLowerCase()!="password" & testV ==3) 
		history.go(-1);
		return " ";
} 

document.getElementById("name").addEventListener('click', addTint, false);
document.getElementById("contact").addEventListener('mouseover', changeOpacity, false);
document.getElementById("contact").addEventListener('mouseout', restoreOpacity, false);
document.getElementById("portfolio").addEventListener('click', showPortfolioInner, false);
document.getElementById("experience").addEventListener('click', showExperienceInner, false);
document.getElementById("about").addEventListener('click', showAboutInner, false);
document.getElementById("education").addEventListener('click', showEducationInner, false);
document.getElementsByClassName("private")[0].addEventListener('click', passWord, false);


