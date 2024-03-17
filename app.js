console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book{
    constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    }
}
const books = [{
    "title": "Name of the Wind",
    "author": "Patrick Rothfuss",
    "read": true
}];

class Library{
    constructor(books){
        this.bookCount = books.length;
        this.books = books;
    }

    addBook(){
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");

        const newBook = new Book(title.value, author.value, read.checked);
        this.books.push(newBook);

        this.bookCount++;
console.log(this.books, this.bookCount);

        const tbody = document.getElementById("tableBody");
        const newTr = document.createElement("tr");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        newTitle.textContent = title.value;
        newAuthor.textContent = author.value;

        const newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.checked = read.checked;
        newCheckbox.disabled = read.checked;
        newRead.appendChild(newCheckbox);

        newTr.appendChild(newTitle);
        newTr.appendChild(newAuthor);
        newTr.appendChild(newRead);

        tbody.appendChild(newTr);
    }

    markRead(checkbox, id){
        this.books.forEach((book) => {
         if(id === book.id) {
             book.read = true;
             checkbox.checked = true;
             checkbox.disabled = true;
         }
        });
    }
}

const library = new Library(books);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    library.addBook();
}); 
 
