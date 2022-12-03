var createForm = document.createElement("form");

var createDiv = document.createElement("div");
createDiv.style.margin = "50px"

createForm.append(createDiv)

var createH1 = document.createElement("h1");

createH1.innerHTML = "Sign Up"

createDiv.append(createH1)

var createP = document.createElement("p")

createP.innerHTML = "<h2>Please fill in this form to create an account.</h2>"

createDiv.append(createP)

var createHr = document.createElement("hr")

createDiv.append(createHr)



var createH3 = document.createElement("h3");

createH3.innerHTML = "First Name"

createDiv.append(createH3)

var createInput = document.createElement("input")

createInput.setAttribute("type", "text")
createInput.setAttribute("placeholder", "Enter First Name")

createInput.style.height = "45px"
createInput.style.width = "735px"
createInput.style.backgroundColor = "#f1f1f1"
createInput.style.paddingLeft = "15px"
createInput.style.border = "none"
createInput.style.borderRadius = "5px"

createDiv.append(createInput)



var createH3 = document.createElement("h3");

createH3.innerHTML = "Second Name"

createDiv.append(createH3)

var createInput = document.createElement("input")

createInput.setAttribute("type", "text")
createInput.setAttribute("placeholder", "Enter Second Name")

createInput.style.height = "45px"
createInput.style.width = "735px"
createInput.style.backgroundColor = "#f1f1f1"
createInput.style.paddingLeft = "15px"
createInput.style.border = "none"
createInput.style.borderRadius = "5px"

createDiv.append(createInput)



var createH3 = document.createElement("h3");

createH3.innerHTML = "Email"

createDiv.append(createH3)

var createInput = document.createElement("input")

createInput.setAttribute("type", "text")
createInput.setAttribute("placeholder", "Enter Email")

createInput.style.height = "45px"
createInput.style.width = "735px"
createInput.style.backgroundColor = "#f1f1f1"
createInput.style.paddingLeft = "15px"
createInput.style.border = "none"
createInput.style.borderRadius = "5px"

createDiv.append(createInput)



var createH3 = document.createElement("h3");

createH3.innerHTML = "Phone"

createDiv.append(createH3)

var createInput = document.createElement("input")

createInput.setAttribute("type", "number")
createInput.setAttribute("placeholder", "Enter Phone Number")

createInput.style.height = "45px"
createInput.style.width = "735px"
createInput.style.backgroundColor = "#f1f1f1"
createInput.style.paddingLeft = "15px"
createInput.style.border = "none"
createInput.style.borderRadius = "5px"

createDiv.append(createInput)



var createH3 = document.createElement("h3");

createH3.innerHTML = "Password"

createDiv.append(createH3)

var createInput = document.createElement("input")

createInput.setAttribute("type", "password")
createInput.setAttribute("placeholder", "Enter Password")

createInput.style.height = "45px"
createInput.style.width = "735px"
createInput.style.backgroundColor = "#f1f1f1"
createInput.style.paddingLeft = "15px"
createInput.style.border = "none"
createInput.style.borderRadius = "5px"

createDiv.append(createInput)



var createH3 = document.createElement("h3");

createH3.innerHTML = "Confirm Password"

createDiv.append(createH3)

var createInput = document.createElement("input")

createInput.setAttribute("type", "password")
createInput.setAttribute("placeholder", "Confirm Password")

createInput.style.height = "45px"
createInput.style.width = "735px"
createInput.style.backgroundColor = "#f1f1f1"
createInput.style.paddingLeft = "15px"
createInput.style.border = "none"
createInput.style.borderRadius = "5px"

createDiv.append(createInput)



var createH2 = document.createElement("h2");

createH2.innerHTML = "Select Gender"

createDiv.append(createH2)


var createRadioBtn = document.createElement("input")

createRadioBtn.setAttribute("type", "radio")
createRadioBtn.setAttribute("name", "radio")

var createP = document.createElement("p")
createP.innerHTML = "Male"
createDiv.append(createP)
createP.style.display = "inline"
createRadioBtn.style.marginRight = "20px"

createDiv.append(createRadioBtn)



var createRadioBtn = document.createElement("input")

createRadioBtn.setAttribute("type", "radio")
createRadioBtn.setAttribute("name", "radio")

var createP = document.createElement("p")
createP.innerHTML = "Female"
createDiv.append(createP)
createP.style.display = "inline"
createRadioBtn.style.marginRight = "20px"

createDiv.append(createRadioBtn)



var createRadioBtn = document.createElement("input")

createRadioBtn.setAttribute("type", "radio")
createRadioBtn.setAttribute("name", "radio")

var createP = document.createElement("p")
createP.innerHTML = "Rather not to say"
createDiv.append(createP)
createP.style.display = "inline"

createDiv.append(createRadioBtn)



var createCheckBox = document.createElement("input")
createCheckBox.checked = true

createCheckBox.setAttribute("type", "checkbox")

var createBr = document.createElement("br")
createDiv.append(createBr)
var createBr = document.createElement("br")
createDiv.append(createBr)
var createBr = document.createElement("br")
createDiv.append(createBr)


var createP = document.createElement("p")
createP.innerHTML = "Remember me"
createP.style.display = "inline"
createP.style.paddingLeft = "5px"

createDiv.append(createCheckBox)
createDiv.append(createP)


var createBr = document.createElement("br")
createDiv.append(createBr)
var createBr = document.createElement("br")
createDiv.append(createBr)
var createBr = document.createElement("br")
createDiv.append(createBr)


var createSubmitBtn = document.createElement("button")

createSubmitBtn.innerHTML = "Sign Up"

createSubmitBtn.style.width = "103px"
createSubmitBtn.style.height = "39px"
createSubmitBtn.style.backgroundColor = "#202124"
createSubmitBtn.style.color = "white"
createSubmitBtn.style.border = "1px solid black"
createSubmitBtn.style.borderRadius = "5px"

createDiv.append(createSubmitBtn)


document.body.append(createForm)