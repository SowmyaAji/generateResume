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

// create heading element, add attributes and text
const heading = document.createElement("h1");
heading.style.color = "red";
heading.style.fontFamily = "Tahoma";
heading.style.textAlign = "center";
const headingText = document.createTextNode("Sowmya Aji");
heading.appendChild(headingText);

// create kicker element, add attributes and text
const kicker = document.createElement("h2");
kicker.style.color = "red";
kicker.style.fontFamily = "Garamond";
kicker.style.textAlign = "center";
kicker.style.fontStyle = "italic";
let kickerText = document.createTextNode("WEB 115 - 001");
kicker.appendChild(kickerText);

// add both to body
bodyElement.appendChild(heading);
bodyElement.appendChild(kicker);


function validateInput(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateEmail(email) {
    if(validateInput(email)) {
        return email;
    }
    else {
        document.getElementById("error").innerHTML = "Please enter a valid email address";
       document.getElementById("email").focus();   
    }
}

// months in the format we want
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

// get the year from the date input or return blank
function getYear(date) {
    if(date == "") {
        return date="";
    }
    else { 
        let year = date.slice(0, 4);
        return year;
    }
}

// get the start year; if both start and end year are the same, do not return start year
function getStartYear(date1, date2) {
  if (date2 == date1) {
    date1 = "";
  }
  return date1;
}

// get the month from the date input and return in correct format
function getMonth(date) {
  if (date == "") {
      return date = "";
  } 
  else {
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

// set the employment years and details in columns for each entry
function getEmployment(startDate, endDate, employment) {
    let endYear = getYear(endDate);
    let startYear = getStartYear(getYear(startDate), endYear);
  
    let myText =
      "<div><div class='left'>" +
      getMonth(startDate) +
      " " +
      startYear + 
      " " +
      "-" +
      " " +
      getMonth(endDate) +
      " " +
      endYear +
      "</div><div class='right'>" +
      employment +
      "</div></div><br>\n";
     return myText;

}

// get all the inputs and put them into formatted html
function generateHTML() {
  const fullName = document.getElementById("fullName").value;
  const fullAddress = document.getElementById("fullAddress").value;
  const phone = document.getElementById("telePhone").value;
  const email = document.getElementById("email").value;
  // get validated email
  const validatedEmail = validateEmail(email);
  const career = document.getElementById("careerObj").value;
  const personal = document.getElementById("peronalInfo").value;
  const education = document.getElementById("education").value;
  let startDate1 = document.getElementById("startDate1").value;
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

  // return html only if the email input is valid
  if (validateInput(email)) {
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
  myText += getEmployment(startDate1, endDate1, employment1);
  if(startDate2) {
      myText += getEmployment(startDate2, endDate2, employment2);
  }
  if(startDate3) {
    myText += getEmployment(startDate3, endDate3, employment3);
}
 if(startDate4) {
    myText += getEmployment(startDate4, endDate4, employment4);
}
  myText +=
    "<div><div class='left'> CHARACTER REFERENCES </div><div class='right'>" +
    references +
    "</div></div><br>";
  myText +=
    "<div><div class='left'> BUSINESS REFERENCES </div><div class='right'>" +
    bizReferences +
    "</div></div><br>\n";
  myText += "</body>\n</html>";
  return myText;
  }
}

// generate a window with the html input
function createResume() {
    const myText = generateHTML();
    // create window only if email is valid and returns myText
    if (myText) {     
    let flyWindow = window.open(
    "about:blank",
    "myResume",
    "width=800,height=800,left=200,top=200"
  );
  flyWindow.document.write(myText);
    }
}



