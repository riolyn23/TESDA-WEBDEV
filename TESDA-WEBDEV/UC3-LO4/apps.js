//Book Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};


//UI Constructor

function UI(){}


//Add book to list

UI.prototype.addBookToList = function(book){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a class ="delete">X</td>
    `;

    console.log(row);
    list.appendChild(row);
};


//Clear Fields

UI.prototype.clearFields = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
};


//Show alert

UI.prototype.showAlert = function(message, className){
    //Create div
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div, form);

    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
    console.log(div);
};

//Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Event listeners
document.querySelector('#book-form').addEventListener('submit', function(e){
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
    
    //Instantiate book
    const book = new Book(title, author, isbn);
    //Instantiate UI
    const ui = new UI();


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
    //Instantiate UI
    const ui = new UI();
    if(confirm('Are you sure?')){
        ui.deleteBook(e.target);
        //Show message
        ui.showAlert('Book Removed!', 'success')
    }
});