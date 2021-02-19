//document.getElementById();

// console.log(document.getElementById('task-title'));

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = ' orange ';
// taskTitle.style.color = ' #399 ';
// taskTitle.style.padding = ' 10px ';
// taskTitle.style.fontStyle = ' arial ';

// taskTitle.textContent = 'Hi everyone';
// taskTitle.innerText = 'My task';
// taskTitle.innerHTML = '<h1 style="color: red">Task List</h1>'


//querySelector document.querySelector();
//ID uses #
//Class uses .

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('head'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'orange';

document.querySelector('li:last-child').style.color = 'orange';
document.querySelector('li:nth-child(2)').style.color = 'orange';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(3)').textContent = 'Oppss!';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#ddd';

