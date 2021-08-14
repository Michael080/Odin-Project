/* Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book */

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    const readMessage = () => this.read ? 'has read' : 'not read yet';
    return `${title}, ${author}, ${pages}, ${title}, ${readMessage()}`;
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 500, false);

console.log('theHobbit.info():\n', theHobbit.info());

