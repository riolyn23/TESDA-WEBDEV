import {Book, UI, Storage} from './model.js';

//DOM load event
document.addEventListener('DOMContentLoaded', Storage.displayBooks);


//Event listeners
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
    
    //Instantiate book
    const book = new Book(title, author, isbn);
    //Instantiate UI
    const ui = new UI();

    //Add to storage
    Storage.addBook(book);


    console.log(book);

//Validate
if(title === '' || author === '' || isbn === ''){
    //Error alert
    ui.showAlert('Please fill all fields', 'error');
} else {
    //Add book to list
    ui.addBookToList(book);
    //Clear fields
    ui.clearFields();
    //Show success
    ui.showAlert('Book Added!', 'success');
}

console.log(title, author, isbn);
e.preventDefault();


});

//Event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e){
    //Remove from storage
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
    
    //Instantiate UI
    const ui = new UI();
    if(confirm('Are you sure?')){
        ui.deleteBook(e.target);
        //Show message
        ui.showAlert('Book Removed!', 'success')
    }
});