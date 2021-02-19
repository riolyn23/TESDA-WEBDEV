//Set local storage item
// localStorage.setItem('name', 'Nicko');
// localStorage.setItem('age', 30);


//Set session storage item
// sessionStorage.setItem('name', 'Kicks');

//Remove from storage
// localStorage.removeItem('age');
// localStorage.removeItem('name');

//Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(name, age);

//Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const task = document.querySelector('#task').value;
    
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');

    tasks.forEach(function(task){
        console.log(task);
    });
});