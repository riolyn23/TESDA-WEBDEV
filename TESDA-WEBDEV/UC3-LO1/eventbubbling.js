//Event bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('Card Title');
    
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('Card Content');
    
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('Card');
    
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('Col');
    
// });

//Event Deligation
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem); 

function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('Working!!!');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('Gumagana!!!');
        e.target.parentElement.parentElement.remove();
    }
}