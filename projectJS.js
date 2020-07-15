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
  const re = g
  return re.test(email);
}


const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "June",
  "July",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec.",
];

function getYear(date) {
    if(date == "") {
        return date="";
    }
    else { 
        let year = date.slice(0, 4);
        return year;
    }
}

function getStartYear(date1, date2) {
  if (date2 == date1) {
    date1 = "";
  }
  return date1;
}

function getMonth(date) {
  if (date == "") {
      return date = "";
    
  } else {
    let month = date.slice(5, 7);
    let monthday = 0;
    if (month < 10) {
      monthday = parseInt(month[1]);
    } else {
      monthday = parseInt(month);
    }
    let formattedMonth = months[monthday - 1];
    return formattedMonth;
  }
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
  let startDate1 = document.getElementById("startDate1").value;
  console.log(startDate1);
  let endDate1 = document.getElementById("endDate1").value;
  let employment1 = document.getElementById("employment1").value;
  let startDate2 = document.getElementById("startDate2").value;
  let endDate2 = document.getElementById("endDate2").value;
  let employment2 = document.getElementById("employment2").value;
  let startDate3 = document.getElementById("startDate3").value;
  let endDate3 = document.getElementById("endDate3").value;
  let employment3 = document.getElementById("employment3").value;
  let startDate4 = document.getElementById("startDate4").value;
  let endDate4 = document.getElementById("endDate4").value;
  let employment4 = document.getElementById("employment4").value;
  const references = document.getElementById("references").value;
  const bizReferences = document.getElementById("bizReferences").value;

  let myText =
    "<html>\n<head>\n<title>My Resume</title>\n<link rel='stylesheet' type='text/css' href='project.css' />\n</head>\n<body>\n";

  myText += "<div>" + fullName + "</div>";

  myText += "<div>" + fullAddress + " / " + phone + "</div>";

  myText += "<div>" + validatedEmail + "</div>";

  myText += "<hr>";

  myText +=
    "<div><div class='left'> CAREER OBJECTIVES </div><div class='right'>" +
    career +
    "</div></div><br>";
 
  myText +=
    "<div><div class='left'> PERSONAL DATA </div><div class='right'>" +
    personal +
    "</div></div><br>";

  myText +=
    "<div><div class='left'> EDUCATION </div><div class='right'>" +
    education +
    "</div></div><br>";

  myText += "<div><div class='left'> EMPLOYMENT EXPERIENCE: </div></div>";

  let endYear = getYear(endDate1);
  let startYear = getStartYear(getYear(startDate1), endYear);

  myText +=
    "<div><div class='left'>" +
    getMonth(startDate1) +
    " " +
    startYear +
    "-" +
    " " +
    getMonth(endDate1) +
    " " +
    endYear +
    "</div><div class='right'>" +
    employment1 +
    "</div></div><br>\n";

  endYear = getYear(endDate2);
  startYear = getStartYear(getYear(startDate2), endYear);
  myText +=
    "<div><div class='left'>" +
    getMonth(startDate2) +
    " " +
    startYear +
    "-" +
    " " +
    getMonth(endDate2) +
    " " +
    endYear +
    "</div><div class='right'>" +
    employment2 +
    "</div></div><br>\n";

  endYear = getYear(endDate3);
  startYear = getStartYear(getYear(startDate3), endYear);
  myText +=
    "<div><div class='left'>" +
    getMonth(startDate3) +
    " " +
    startYear +
    "-" +
    " " +
    getMonth(endDate3) +
    " " +
    endYear +
    "</div><div class='right'>" +
    employment3 +
    "</div></div><br>";

  endYear = getYear(endDate4);
  startYear = getStartYear(getYear(startDate4), endYear);
  myText +=
    "<div><div class='left'>" +
    getMonth(startDate4) +
    " " +
    startYear +
    "-" +
    " " +
    getMonth(endDate4) +
    " " +
    endYear +
    "</div><div class='right'>" +
    employment4 +
    "</div></div>";

  myText +=
    "<div><div class='left'> CHARACTER REFERENCES </div><div class='right'>" +
    references +
    "</div></div><br>";

  myText +=
    "<div><div class='left'> BUSINESS REFERENCES </div><div class='right'>" +
    bizReferences +
    "</div></div><br>\n";

  myText += "</body>\n</html>";
  console.log(myText);

  let flyWindow = window.open(
    "about:blank",
    "myResume",
    "width=800,height=800,left=200,top=200"
  );
  flyWindow.document.write(myText);
}
