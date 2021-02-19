//Event Listener

// document.querySelector('.clear-task').addEventListener('click', function(){
//     console.log('Na click ka ba?');
// });

document.querySelector('.clear-task').addEventListener('click', onclick);

function onclick(e){
    // console.log('Clicked');

    let value;
    value = e;


    //Event target element
    value = e.target;
    value = e.target.id;
    value = e.target.className;
    value = e.target.classList;


    //Event Type
    value = e.type;


    //Timestamp
    value = e.timeStamp;


    //Mouse coordinate event relative to the window
    value = e.clientY;
    value = e.clientX;


    //Coordinate event relative to the element
    value = e.offsetY;
    value = e.offsetX;

    console.log(value);
};