
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

function addBookToLibrary (title, author) {
	// take params, create a book then store it in the array
	let newBook = new Book (title, author)
	myLibrary.push(newBook);

};

addBookToLibrary("Pet Sematary", "Stephen King", 1989);
addBookToLibrary("The Odyssey", "Homer", 700);

function displayBooks (array) {
	for (let i = 0; i < array.length; i++) {
		console.table(array[i]);
	}
}