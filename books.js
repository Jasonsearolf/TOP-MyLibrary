
const booksWrapper	= document.querySelector(".books-wrapper");
const addButton		= document.querySelector(".add-item");

const myLibrary = [];

function Book (title, author, pages, read) {
	if(!new.target){
		throw Error("You must use the 'new' operator to call the constructor")
	}
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	
};

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read" : "not read yet"}.`;
};

function addBookToLibrary (title, author, pages) {
	// take params, create a book then store it in the array
	let newBook = new Book (title, author, pages)
	myLibrary.push(newBook);

};

addBookToLibrary("Pet Sematary", "Stephen King", 532);
addBookToLibrary("The Odyssey", "Homer", 839);

function domBookCreate (title, author, pages){

	const bookItem			=	document.createElement("div");
	bookItem.className 		=	"book-item";
	booksWrapper.appendChild(bookItem);
	const bookTitle			=	document.createElement("h3");
	bookTitle.className		=	"book-title";
	bookTitle.textContent 	=	`${title}`;
	bookItem.appendChild(bookTitle);
	const bookCover			=	document.createElement("div");
	bookCover.className		=	"book-cover";
	bookItem.appendChild(bookCover);
	const bookAuthor		=	document.createElement("p");
	bookAuthor.className	=	"book-author";
	bookAuthor.textContent 	=	`${author}`;
	bookItem.appendChild(bookAuthor);
	const bookPages			=	document.createElement("p");
	bookPages.className		=	"book-author";
	bookPages.textContent 	=	`Pages: ${pages}`;
	bookItem.appendChild(bookPages);
	const removeItem		=	document.createElement("div");
	removeItem.className	=	"remove-item";
	const removeIcon		=	document.createElement("div");
	removeIcon.className	=	"material-symbols-outlined";
	removeIcon.textContent	=	"delete";
	removeItem.appendChild(removeIcon);
	bookItem.appendChild(removeItem);
}

function displayBooks (array) {
	array.forEach(({title, author, pages}) => {
		domBookCreate(title, author, pages);
	});
	/* for (let i = 0; i < array.length; i++) {
		console.table(array[i]);

		const bookItem			=	document.createElement("div");
		bookItem.className 		=	"book-item";
		booksWrapper.appendChild(bookItem);
		const bookTitle			=	document.createElement("h3");
		bookTitle.className		=	"book-title";
		bookTitle.textContent 	=	`${array[i].title}`;
		bookItem.appendChild(bookTitle);
		const bookCover			=	document.createElement("div");
		bookCover.className		=	"book-cover";
		bookItem.appendChild(bookCover);
		const bookAuthor		=	document.createElement("p");
		bookAuthor.className	=	"book-author";
		bookAuthor.textContent 	=	`${array[i].author}`;
		bookItem.appendChild(bookAuthor);
		const bookPages			=	document.createElement("p");
		bookPages.className		=	"book-author";
		bookPages.textContent 	=	`Pages: ${array[i].pages}`;
		bookItem.appendChild(bookPages);
		const removeItem		=	document.createElement("div");
		removeItem.className	=	"remove-item";
		const removeIcon		=	document.createElement("div");
		removeIcon.className	=	"material-symbols-outlined";
		removeIcon.textContent	=	"delete";
		removeItem.appendChild(removeIcon);
		bookItem.appendChild(removeItem);

	}
	*/
}



function addNewBook () {
	let title = prompt("Write book title");
	let author = prompt("Who's the author?");
	let pages = prompt("How many pages?");

	addBookToLibrary(title, author, pages);
	domBookCreate (title, author, pages);
}

document.addEventListener("DOMContentLoaded", () => {
	displayBooks(myLibrary);
})

addButton.addEventListener("click", (array) => {
	addNewBook();
});