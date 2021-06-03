var form = document.getElementById('form');
var itemList = document.getElementById('list-group')
var filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(event){
    event.preventDefault();

//get input value
var newStuff = document.getElementById('input').value;

//create new li element
var li = document.createElement('li')
//add class
li.className = 'list';
//add text node with input value
li.appendChild(document.createTextNode(newStuff));

//create delete button element
var deleteBtn = document.createElement('button');

//add classes
deleteBtn.className = 'btn btn-danger btn-sm  delete'
//append text node
deleteBtn.appendChild(document.createTextNode('X'));

//append button to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);
}

//remove item
function removeItem(event){
    if (event.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this item?')) {
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(event){
    //convert text to lowercase
    var text = event.target.value.toLowerCase();
    //get lis
   var items = itemList.getElementsByTagName('li');
   //convert to an array
   Array.from(items).forEach(function (list) {
       var itemName = list.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
        list.style.display = "block";
        } else{
            list.style.display = 'none';
        }
   });
}
