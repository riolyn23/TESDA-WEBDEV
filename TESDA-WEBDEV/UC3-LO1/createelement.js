// Create Element

const li = document.createElement('li');


//Add Class

li.className = 'collection-item';


//Add ID

li.id = 'new-item';


// Add attribute

li.setAttribute('title', 'New Item');


// Create text node and append

li.appendChild(document.createTextNode('Yoshhhhh!'));


// Create new link element *adding <a> tag

const link = document.createElement('a');

link.className = 'delete-item secondary-content';

link.innerHTML = '<i class="fa fa-remove"></i>';


// Append link into li

li.appendChild(link);


// Append li as a child to ul

document.querySelector('ul.collection').appendChild(li);




console.log(li)