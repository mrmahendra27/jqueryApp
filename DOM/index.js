var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//add item
form.addEventListener('submit', addItem);

//delete item
itemList.addEventListener('click', removeItem);

//filter item
filter.addEventListener('input', filterItem);

function addItem(e) {
    e.preventDefault();

    var item = document.querySelector('#item');

    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(item.value));

    var button = document.createElement('button');
    button.className = "btn btn-danger btn-sm float-right delete";
    button.appendChild(document.createTextNode('X'));
    li.appendChild(button);

    itemList.appendChild(li);

    item.value = "";
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItem(e) {
    var text = e.target.value.toLowerCase();
    var data = itemList.getElementsByTagName('li');
    Array.from(data).forEach(item => {
        var name = item.firstChild.textContent;
        if (name.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}