console.log("Did I actually run - Am I in the console log?");

document.body.onload = addElement;

let myHeading = document.querySelector('#MainTitle');
let userBtn = document.querySelector('#setUserBtn');

let node = document.createElement("LI");                 		// Create a <li> node
let textnode = document.createTextNode("Procrastinators");  // Create a text node
node.appendChild(textnode);                              		// Append the text to <li>
document.getElementById("SkillList").appendChild(node);

function addElement()
{
	let newElement = document.createElement("div"); 
	newElement.appendChild(document.createTextNode("Some new text"));
	let existingElement = document.getElementById("SkillList");
	document.body.insertBefore(newElement, existingElement);
}

//document.querySelector("html").onclick = () => alert("Arrow");

//
// Toggle the image...
//
let imageElement = document.querySelector("#main-image");
imageElement.onclick = () => { 
	if (imageElement.getAttribute("src") === "images/bird.jpg")
		imageElement.setAttribute("src", "images/firefox-icon.png");
	else
		imageElement.setAttribute("src", "images/bird.jpg");
}

userBtn.onclick = setUser;

function setUser()
{ 
	let userName = prompt('Please enter your name');
	localStorage.setItem('name', userName);

	myHeading.textContent = "Mozilla is cool, " + localStorage.getItem('name');
}

if (!localStorage.getItem('name'))
	setUser();
else
	myHeading.textContent = "Mozilla is cool, " + localStorage.getItem('name');


//alert("An ALERT!");
