// 1. Select the first <div> on the page using 
// getElementsByTagName and log its innerHTML.

console.log(document.getElementsByTagName('div')[0].innerHTML)


// 2. Using getElementById change the text of #my-p to 
// "Hello DOM".

document.getElementById('my-p').innerHTML = "Hello DOM"

// 3. Use querySelector to select the element with class
//  "target-div" and log its nodeName.

console.log(document.querySelector('.target-div').nodeName)

// 4. Use querySelectorAll to count how many <div> elements
//  exist; log the count.

console.log(document.querySelectorAll('div').length)

// 5. Use getElementsByName on the email input 
// (name="user-email") and set its value to "user@test.com".

document.getElementsByName("user-email").value = "user@test.com";

// 6. Check if the text input has a "name" attribute; 
// if not add name="user-name" via setAttribute.

var nameAtrribute = document.querySelector("[type = text]")

if (!nameAtrribute.name) {
    nameAtrribute.setAttribute('name', 'new-arributes')
}

console.log(nameAtrribute)


// 7. Append the string " - UPDATED" to the existing 
// innerText of #my-p (keep original text).

document.getElementById('my-p').innerHTML += "  - UPDATED"


// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.

// 9. Set the placeholder of the text input to 
// "Type your full name" using setAttribute.
 document.querySelector("[type = email]")


// 10. Log whether the email input has attribute
//  "required"; if missing add it.

var hasAtrribute =  document.querySelector("[type = email]").hasAttribute('required')

if (hasAtrribute === false){
    document.querySelector("[type = email]").setAttribute("required","true")
}

// 11. Write function getSelectedValue(selectId) returning
//  the current selected option value.

function getSelectedValue(selectId){
    var options = document.getElementById(`${selectId}`).options

    for (var i =0; i<options.length; i++){
        console.log(`option ${i+1} has value ${options[i].value}`)
    }
}

getSelectedValue('my-select')

// 12. Loop through all options of the select and 
// log each option's text and value.

var options = document.getElementById('my-select').options

    for (var i =0; i<options.length; i++){
        console.log(`option ${i+1} has value ${options[i].value} and text ${options[i].text}`)
    }

// 13. Programmatically select the option with value "EG".
var options = document.getElementById('my-select').options
for (var i =0; i<options.length; i++){
    if(options[i].value === 'EG'){
        options[i].selected = true;
    }
    }

// 14. Create function selectByText(selectId, text) 
// that selects the first option whose text matches exactly.

function selectByText(selectId, text) {
    var options = document.getElementById(`${selectId}`).options
    for (var i =0; i<options.length; i++){
     if(options[i].text === `${text}`){
        options[i].selected = true;
    }
}
}

selectByText('my-select', 'United States')

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p>
//  (ensure bold renders, not printed literally).

document.querySelector("#div-2").innerHTML = "<p><b>Bold Text</b></p>";
document.querySelector("#div-2").children[0].style.textTransform = "uppercase"


// 16. Add classes class-a and class-b to #div-2 then
//  remove class-b (using classList).

document.getElementById("div-2").classList.add("class-a");
document.getElementById("div-2").classList.add("class-b");
console.log(document.getElementById("div-2").classList)
document.getElementById("div-2").classList.remove("class-b");
console.log(document.getElementById("div-2").classList)


// 17. Toggle clsass "hidden" on #div-2 twice;
//  comment final visibility.

document.getElementById("div-2").classList.toggle("hidden");
console.log(document.getElementById("div-2").classList)
document.getElementById("div-2").classList.toggle("hidden");
console.log(document.getElementById("div-2").classList)


// 18. Create function insertAfter(refNode, newNode)
//  that inserts newNode immediately after refNode.

function insertAfterElement(refNode, newNode){
    var newElement = document.createElement(newNode)
    newElement.innerHTML = "Created from javascript"
    var parentNode = document.querySelector(refNode)

    parentNode.after(newElement)
}

insertAfterElement('div', 'p')

// 19. Create a new <div> saying "Dynamic Box"
//  with yellow background and append inside #div-2.
var newDiv = document.createElement('div')
newDiv.innerHTML = "Dynamic Box"
newDiv.style.backgroundColor = 'yellow'

document.getElementById("div-2").appendChild(newDiv)
document.getElementById("div-2").style.backgroundColor = "white";


// 20. Insert a new <p> BEFORE the first child of 
// #div-2 (insertBefore).

var newP = document.createElement('p')
newP.innerHTML = "new paragraph"

document.getElementById("div-2").insertAdjacentElement('afterbegin', newP)


// 21. Insert a <span> with text "AFTER END" 
// right after #div-2 using insertAdjacentHTML.

var newP = document.createElement('span')
newP.innerHTML = "new paragraph"

document.getElementById("div-2").insertAdjacentElement('afterbegin', newP)


// 22. Form onsubmit: prevent default and log values of text, email, 
// and select inputs.

// console.log("Q22")
// document.forms[0].onsubmit = function(event){
//     event.preventDefault()
//     console.log(document.forms[0].elements[0].value)
//     console.log(document.forms[0].elements[1].value)
//     console.log(document.forms[0].elements[2].value)
// }

// 23. Add input event on the text input that logs
//  its length whenever it changes.

// console.log("Q23")

// var textInput = document.querySelector("[type = text]")
// textInput.addEventListener("input", function(event){
//     console.log("current length is: ", textInput.value.length);
// });


// 24. Write validateEmailSimple(value) returning true if value 
// contains both '@' and '.'; add 2 passing / 2 
// failing examples (comments).

console.log("Q24") 

function validateEmailSimple(value){

    if (value.split("@").length > 1 && value.split(".").length > 1){
        return true
    }
    else{
        return false
    }

};

console.log(validateEmailSimple("ayman123@gmail.com"))
console.log(validateEmailSimple("user.name_2025@yahoo.co.uk"))
console.log(validateEmailSimple("hello@com"))
console.log(validateEmailSimple("noatsymbol.com"))


// 25. Create an element, append it to #div-2, 
// then remove it using parent.removeChild(child).

document.getElementById('div-2').innerHTML += "<span> new span</span>";

document.getElementById('div-2').removeChild(
document.getElementById('div-2').children[4]
);

// 25. Create an element, append it between first and second in wrapper div

var newElement = document.createElement('span')
newElement.innerHTML = "new span created from javascript q25" 

var wrapperDiv = document.querySelector("#wrapper")

wrapperDiv.insertBefore(newElement, wrapperDiv.children[1])




// 26. Clone #div-2 , set clone id="div-2-clone", 
// and insert it after original using insertAfter.

// var orignalDiv = document.getElementById('div-2')
// var clone = orignalDiv.cloneNode(true);
// clone.id = "div-2-clone";
// clone.innerHTML += "Clone div";
// orignalDiv.insertAdjacentElement("afterend", clone);



// 27. Highlight all text & email inputs (green border)
//  in a function highlightInputs(form) and call it
//  on DOMContentLoaded.

function highlightInputs(form) {
    var inputs = form.querySelectorAll('input')
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.border = '2px solid green'
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('form')
    for (var i = 0; i < forms.length; i++) {
        highlightInputs(forms[i])
    }
})

// 28. Build function buildCard(title, content)
//  returning <div class="card"> with an <h3> and <p>;
//  append two cards to body.

function buildCard(title, content) {
    var card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = '<h3>' + title + '</h3><p>' + content + '</p>';
    document.body.appendChild(card)
}

buildCard('Card 1', 'This is card 1')
buildCard('Card 2', 'This is card 2')

// 29. Add delegated click listener on body logging when 
// a .card is clicked.

document.body.addEventListener('click', function(event) {
    if (event.target.className === 'card') {
        console.log(event.target.innerHTML)
    }
})


// 30. Reflection (comment): Which two tasks were most
//  challenging and why? 
// event tasks 

// 31. create and unordered list dynamically with at 10 items,
//  the odd list items should have class "odd" and even items "even"
var ul = document.createElement('ul')
for (var i = 0; i < 10; i++) {
    var li = document.createElement('li')
    li.innerHTML = 'item ' + i
    if (i % 2 === 0) {
        li.className = 'even'
    } else {
        li.className = 'odd'
    }
    ul.appendChild(li)
}
document.body.appendChild(ul)

// 32-create the two classes in your CSS file-1.
//  Select the first <div > on the page using getElementsByTagName 
// and log its innerHTML.

var divs = document.getElementsByTagName('div')
console.log(divs[0].innerHTML)



//32 . form has 3 inputs name email city take there values to div coantin 3 pargraphs name email city

var form = document.querySelector('form')
var inputs = form.querySelectorAll('input')
for (var i = 0; i < inputs.length; i++) {
    var paragraph = document.createElement('p')
    paragraph.innerHTML += inputs[i].value
    document.body.appendChild(paragraph)
}
