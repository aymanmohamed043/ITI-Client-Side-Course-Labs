// ---
// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
    // newWindow = window.open("https://facebook.com", "", "width=700, height=500");

    // function closeWindow(){
    //     newWindow.close()
    //     console.log('window closed')
    // }
    // setTimeout(closeWindow, 5000)
    

// 2. Display the browser's user agent string in an alert.
// alert(navigator.userAgent)

// 3. Use `navigator` to detect if the browser is
//  online or offline and log the result.
if (navigator.onLine === true){

    console.log("OnLine" )
}

else{
    console.log('OffLine')
}
// 4. Write code to reload the current page after 5 seconds.

// setInterval(function(){
//     location.reload();
//     console.log('page reloaded');
// }, 5000)

// 5. Get the current page URL, protocol, and hostname
//  using `location` and log them.

console.log("page url: ", location.href)
console.log("page protocol: ", location.protocol)
console.log("page hostname: ", location.hostname)

// 6. Use `history` to go back one page, then forward one page
//  (write the code, don't actually run it).

// history.back(1)
// history.forward(1)

// 7. Show the screen width and height in a div -change 
// the div content- on the page.

// console.log(window.screen.width)
// console.log(window.screen.height)
// document.getElementById('div1').innerHTML = "changer using javascrpt"

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.

// var contentId;
// function changeContent(){
//    contentId = location.href = "https://google.com";
// }

// setTimeout(changeContent, 2000);

// function changeCancel(){
//     clearTimeout(contentId);
// }


// 9. Use `setInterval` to update the time  
// on the page title every second, and a button to stop it.

// var timeId; 
// function updateTime(){
//     timeId = document.title = `time no is ${new Date}`;
// }

// setInterval(updateTime, 1000)

// function stopChange(){
//     clearInterval(timeId)
// }


// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").

// confirmOutput = confirm("Do you Want Continue") 

// if (confirmOutput === true){
    
//     console.log("user said yes")
// }

// else{
    
//     console.log("user said no")
// }
// ---

// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its
//  `childNodes` and `children` properties. Explain the difference in a comment.
console.log("get first ul : ")
console.log(document.childNodes[1].childNodes[2].children[4])
console.log(document.childNodes[1].childNodes[2].children[4].childNodes)
console.log(document.childNodes[1].childNodes[2].children[4].children)

// childNodes give me elements and text 
// children get element only 

// 12. Write a function that logs the tag names of all direct
//  child elements of `<body>`.

// function logChilds(){
//     for (var i of document.childNodes[1].childNodes[2].children){
//         console.log(i)
//     }
// }

// logChilds();

// 13. Given a parent element, loop through its `childNodes` 
// and log only the nodes that are elements (not text/comments).

// for (var i of document.childNodes[1].childNodes[2].children){
//     if (i != 'text' || i != 'comment'){
//         console.log("not text or comment element: ", i)
//     }
// }


// 14. Use `firstChild` and `firstElementChild` on
//  a container and explain the difference in a comment.

// firstChild gives me text 
// firstElementChild give me element li 

// 15. Write code to get all `<li>` elements inside a 
// `<ul>` using `children` and explain the difference.

var lis = document.getElementsByTagName('LI')
console.log("q15: ", lis)

// 17. Write a function that logs all sibling elements of
//  a given element (excluding itself).


// function getSibings(elementId){
//     var siblings =  document.getElementById(`${elementId}`).nextSibling.innerHTML;

//     console.log("q17", siblings)
//     // for ( s of siblings){
//     //     console.log(s)
//     }

// getSibings("ul1")

// 18. Use `nextSibling` and `nextElementSibling` to traverse
//  from the first child to the last child of a `<ul>`, 
// logging each node.


// 19. Count how many element children a given node has (not using `children.length`).

// document.childNodes[1].childNodes[2].children.length

// 20. Write a function that takes the first form element and logs the names
//  and values of all its input fields using the `elements` collection.

// function logFormInputs() {
//     var form = document.forms[0];  

//     if (!form) {
//         console.log("No form found.");
//         return;
//     }

//     var elems = form.elements;
//     for (var i = 0; i < elems.length; i++) {
//         var field = elems[i];
//         if (field.tagName.toLowerCase() === "input" || 
//             field.tagName.toLowerCase() === "textarea" || 
//             field.tagName.toLowerCase() === "select") {
//             console.log("Name: " + field.name + ", Value: " + field.value);
//         }
//     }
// }




// 21. Access all forms in the document using `document.forms` and log their names.
// function logFormNames() {
//     var forms = document.forms; 

//     if (forms.length === 0) {
//         console.log("No forms found.");
//         return;
//     }

//     for (var i = 0; i < forms.length; i++) {
//         console.log("Form " + i + " name: " + forms[i].name);
//     }
// }


// 22. Access all images in the document using `document.images` and log their `src` attributes.

// function logImageSources() {
//     var imgs = document.images; 

//     if (imgs.length === 0) {
//         console.log("No images found.");
//         return;
//     }

//     for (var i = 0; i < imgs.length; i++) {
//         console.log("Image " + i + " src: " + imgs[i].src);
//     }
// }


// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.

// function disableFormInputs(form) {
//     if (!form) {
//         console.log("Form not found.");
//         return;
//     }

//     var elems = form.elements; 

//     for (var i = 0; i < elems.length; i++) {
//         elems[i].disabled = true;
//     }

//     console.log("All inputs in the form are disabled.");
// }


// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.


// function filterLargeImages() {
//     var imgs = document.images;  
//     var arr = []; 

//     for (var i = 0; i < imgs.length; i++) {
//         arr.push(imgs[i]);
//     }

//     var largeImgs = arr.filter(function(img) {
//         return img.width > 100;
//     });

//     for (var j = 0; j < largeImgs.length; j++) {
//         console.log("Large image src: " + largeImgs[j].src);
//     }
// }


// ---
