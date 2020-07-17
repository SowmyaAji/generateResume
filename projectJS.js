
// create header and kicker elements, add attributes and text and prepend them to body for input html file
function generateHeader() {
    const heading = document.createElement("h1");
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
    let kickerText = document.createTextNode("WEB 115 - 001");
    kicker.appendChild(kickerText);
    document.body.prepend(heading);
    document.body.prepend(kicker);

  }

// function employmentDeets() {
  
// let emptText ="<p id='empNo'><label for='startDate'>Enter the start date for your most recent employment: </label><br> <input type='date' name= 'startDate' id= 'startDate'></p> <p><label for='endDate'>Enter the end date for your most recent employment: </label><br><input type='date' name='endDate' id='endDate'></p><p><label for='employment'>Enter your employment experience: </label><br><textarea name='employment' id='employment' cols='72' rows='10' spellcheck='true'></textarea></p>";

//   document.getElementById("employmentDeets").innerHTML += emptText;
// }

function addEmpt() {
 let empt = document.createElement("div");
 empt.setAttribute('id', 'empt')
 console.log(empt);
 let para = document.createElement("div");
 let label = document.createElement('label');
 label.htmlFor = 'startDate';
 let labelText = document.createTextNode('Enter the start date for employment: ')
 label.appendChild(labelText);
 console.log(label);
 let linebreak = document.createElement('br');
 label.appendChild(linebreak);
 let input = document.createElement('input');
 input.setAttribute('type', 'date');
 input.setAttribute('name', 'startDate');
 input.setAttribute('id', 'startDate');
 label.appendChild(input);
 para.appendChild(label);
 console.log(para);
 empt.appendChild(para);
 para = document.createElement("p");
 label = document.createElement('label');
 label.htmlFor = 'endDate';
 labelText =   document.createTextNode('Enter the end date for employment: ')
 label.appendChild(labelText);
 linebreak = document.createElement('br');
 label.appendChild(linebreak);
 input = document.createElement('input');
 input.setAttribute('type', 'date')
 input.setAttribute('name', 'endDate');
 input.setAttribute('id', 'endDate');
 label.appendChild(input);
 para.appendChild(label);
 empt.appendChild(para);
 para = document.createElement("p");
 label = document.createElement('label');
 label.htmlFor = 'employment';
 labelText =   document.createTextNode('Enter your employment experience: ')
 label.appendChild(labelText);
 linebreak = document.createElement('br');
 label.appendChild(linebreak);
 let textArea = document.createElement('textarea');
 textArea.setAttribute('name', 'employment')
 textArea.setAttribute('cols', '72');
 textArea.setAttribute('id', 'employment');
 textArea.setAttribute('rows', '10');
 label.appendChild(textArea);
 para.appendChild(label);
 empt.appendChild(para);

 document.getElementById("employmentDeets").appendChild(empt);
}

function removeEmpt() {
  const empt = document.getElementById('empt')
  document.getElementById("employmentDeets").removeChild(empt);
}

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


// get the year from the date input or return blank
function getYear(date) {
    if(date == "") {
        return date;
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
  if (date == "") {
      return date;
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


function addListener(obj, type, fn) {
  // if browser supports event listener
  if (obj.addEventListener) {
    obj.addEventListener(type, fn);
  }
  // if browser supports attach event (older browsers)
  else {
    obj.attachEvent("on"+ type, fn);
  }
}

addListener(document.getElementById("add"), "click", addEmpt);
addListener(document.getElementById("remove"), "click", removeEmpt);
addListener(document.getElementById("create"), "click", createResume);

