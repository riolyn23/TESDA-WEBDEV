//Book Class
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//UI Class
class UI {
    addBookToList(book){
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
    }

    showAlert(message, className){
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

    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
};

//Local Storage Class
class Storage {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){
        const books = Storage.getBooks();
        books.forEach(function(book){
            const ui = new UI();

            //Add book to ui
            ui.addBookToList(book);
        })
    }

    static addBook(book){
        const books = Storage.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Storage.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

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