/*console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "Practice";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = "Hello"
console.log(document.form);
*/

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title')
//console.log(headerTitle);
/*headerTitle.textContent = "hello"
headerTitle.innerText = "Goodbye"*/
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>Hello</h3>"
//headerTitle.style.borderBottom = "solid 3px black"

//GETELEMENTSBYCLASSNAME
/*var items = document.getElementsByClassName("text");
console.log(items);
console.log(items[2]);
items[2].textContent = 'Hello 2';
items[2].style.fontweight = 'bolder';
//items[2].style.backgroundcolor = 'yellow';

for(var i = 0; i < items.length; i++) {
    items{1}.style.backgroundColor = 'grey'
}*/

/*var input = document.getElementsByTagName("input");
console.log(input);
console.log(input[2]);
input[2].textContent = 'Hello 2';
input[2].style.fontweight = 'bolder';
input[2].style.backgroundColor = 'yellow';
for(var i = 0; i < input.length; i++){
    input[2].style.backgroundColor = '#f4f4f4'
}*/

//QUERY SELECTOR//
/*console.log(document.getElementById('header-title'));
var header = document.getElementById('header-title');
var header = document.querySelector('header-title');
header.style.borderBottom = "solid 4px black";

var input = document.querySelector("input");
input.value = "Hello"

var submit = document.querySelector('input[type="submit"]')
submit.value="SEND"
*/
 //console.log(document.getElementById("items"));
 //var itemList = document.getElementById("items");

 //parentNode
//  var itemList = document.querySelector("#items");
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = "#f4f4f4"
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = "#f4f4f4"
//console.log(itemList.parentElement.parentElement.parentElement);

// var myDiv = document.querySelector("#items")
//console.log(myDiv.parentElement);
//myDiv.parentElement.style.backgroundColor = "#f4f4f4"
//console.log(myDiv.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);
//console.log(myDiv.childNodes);


//children
/*console.log(myDiv.children);
console.log(myDiv.children[0]);
myDiv.children[0].style.backgroundColor = "red"

console.log(myDiv.children);
console.log(myDiv.children[1]);
myDiv.children[1].style.backgroundColor = "orange"

console.log(myDiv.children);
console.log(myDiv.children[2]);
myDiv.children[2].style.backgroundColor = "yellow"

console.log(myDiv.children);
console.log(myDiv.children[3]);
myDiv.children[3].style.backgroundColor = "rgb(54, 128, 54)" */

//firstChild
//console.log(myDiv.firstChild);

//firstElementChild
//console.log(myDiv.firstElementChild);
//myDiv.firstElementChild.textContent = "Hello 1"

//lastChild
//console.log(myDiv.lastChild);

//lastElementChild
//console.log(myDiv.lastElementChild);
//myDiv.lastElementChild.textContent = "Last List Item"

//nextSibling
//console.log(myDiv.nextSibling);

//nextElementSibling
//console.log(myDiv.nextElementSibling);
//myDiv.nextElementSibling.textContent = "No items Added Yet"

//previousSibling
//console.log(myDiv.previousSibling);
//myDiv.previousSibling.textContent = "Hello 1"

//previousElementSibling
//console.log(myDiv.previousElementSibling);
//myDiv.previousElementSibling.textContent = "Hello 1"

 //createElement
 //create a div
 //var newDiv = document.createElement("div");
 //add class
 //newDiv.className = "hello"
//add id
//newDiv.id = "hello 1"
//add attr
//newDiv.setAttribute("title", "Hello Div");
//Create text node
//var newDivText = document.createTextNode("Welcome");
//Add text to div
//newDiv.appendChild(newDivText); 

//var container = document.querySelector ("header .container");
//var h1 = document.querySelector("header h1");

//console.log(newDiv);

//container.insertBefore(newDiv, h1);
//newDiv.style.fontSize = "20px"
//newDiv.style.fontWeight = "bolder"


//Events
// var button = document.getElementById("button").addEventListener("click", buttonClick);

//  function buttonClick(){
     //console.log("Button Clicked");
    // document.getElementById("header-title").textContent = "Changed";
     //document.querySelector('first-div').style.backgroundColor = "#f4f4f4"
    //console.log(event);

    // console.log(event.target);
    //console.log(event.target.id);
    //console.log(event.target.className);
    //console.log(event.target.classList);
// var output = document.getElementById('output');
    //output.innerHTML = '<h3>'+event.target.id+ '</h3>';

    //console.log(event.type);

    //console.log(event.clientX);
    //console.log(event.clientY);

    //console.log(event.offsetY);
    //console.log(event.offsetX);

    // console.log(event.altKey);
    // console.log(event.ctrlKey);
    // console.log(event.shiftKey); 
 //}

 //var button = document.getElementById("button");
//  var box = document.getElementById("box");
 
 //addEventListener("click", runEvent);
 //addEventListener("dblclick", runEvent);
//addEventListener("mousedown", runEvent);
//addEventListener("mouseup", runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// console.log(itemInput);
// var form = document.querySelector('form');
// console.log(form);
// var select = document.querySelector('select');
// console.log(select)


//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent)

//  function runEvent(event){
//      event.preventDefault();
//    console.log('EVENT TYPE: ' +event.type);


//console.log(event.target.value)
//document.getElementById('output').innerHTML = '<h3>'+event.target.value+'</h3>';



//  output.innerHTML = '<h3>MouseX: '+event.offsetX+' </h3><h3>MouseY: '+event.offsetY+'</h3>';

//  document.body.style.backgroundColor = "rgb("+event.offsetX+", "+event.offsetY+", 40)"
 //}
 








