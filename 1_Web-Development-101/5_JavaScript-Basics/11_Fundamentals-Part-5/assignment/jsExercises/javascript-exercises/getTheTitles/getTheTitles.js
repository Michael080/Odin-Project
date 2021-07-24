const getTheTitles = function(books) {
  let result = [];

  books.forEach(book => {
    result.push(book.title);
  });

  return result;
}

module.exports = getTheTitles;