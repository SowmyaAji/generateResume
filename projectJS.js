// create html element
const container = document.documentElement;
console.log(container);
// create head element
const headElement = container.firstChild;
console.log(headElement);
// create body element (check for whitespace rows)
let bodyElement;
if (headElement.nodeType == 1) {
  bodyElement = headElement.nextSibling.nextSibling;
} else {
  bodyElement = headElement.nextSibling;
}

const heading = document.createElement("h1");

// color and font family with object.style attribute
heading.style.color = "red";
heading.style.fontFamily = "Tahoma";
heading.style.textAlign = "center";

const headingText = document.createTextNode("Sowmya Aji");
heading.appendChild(headingText);

const kicker = document.createElement("h2");
kicker.style.color = "red";
kicker.style.fontFamily = "Garamond";
kicker.style.textAlign = "center";
kicker.style.fontStyle = "italic";
console.log(kicker);
let kickerText = document.createTextNode("WEB 115 - 001");
kicker.appendChild(kickerText);

bodyElement.appendChild(heading);
bodyElement.appendChild(kicker);

function validateInput(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function createResume() {
  const fullName = document.getElementById("fullName").value;
  const fullAddress = document.getElementById("fullAddress").value;
  const phone = document.getElementById("telePhone").value;
  const email = document.getElementById("email").value;
  let validatedEmail = " ";
  if (validateInput(email)) {
    validatedEmail = email;
  } else {
    alert(
      "Email address is either invalid or not entered. Please enter a correct one."
    );
    document.getElementById("email").focus();
  }
  const career = document.getElementById("careerObj").value;
  const personal = document.getElementById("peronalInfo").value;
  const education = document.getElementById("education").value;
  const startDate1 = document.getElementById("startDate1").value;
  console.log(startDate1);
  let myText =
    "<html>\n<head>\n<title>My Resume</title>\n<link rel='stylesheet' type='text/css' href='project.css' />\n</head>\n<body>\n";
  myText += ("<div>" + fullName + "</div>");

  myText += ("<div>" + fullAddress + " / " + phone + "</div>");
  myText += ("<div>" + validatedEmail +  "</div>");
  myText += ("<hr>");
  myText += ("<p><div class='left'> CAREER OBJECTIVES </div><div class='right'>" + career + "</div></p>");
  myText += ("<p><div class='left'> PERSONAL DATA </div><div class='right'>" + personal + "</div></p>");
  myText += ("<p><div class='left'> EDUCATION </div><div class='right'>" + education + "</div></p>");
  myText += ("<p><div class='left'> EMPLOYMENT EXPERIENCE: </div></p>");
  myText += "</body>\n</html>";
  console.log(myText);


  let flyWindow = window.open('about:blank','myResume','width=800,height=800,left=200,top=200');
  flyWindow.document.write(myText);
}
