let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
value = list;

//Get child nodes
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType;

// 1 - element
// 2 - attribute (deprecated) *not used annymore
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype

//Get children element nodes

value = list.children;
value = list.children[1];
list.children[1].textContent = 'Children ka'


console.log(value);