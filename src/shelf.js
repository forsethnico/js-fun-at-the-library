function shelfBook(book, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var titles = "";
  for (var i = 0; i < shelf.length; i++) {
//Creating list of titles where last item in shelf array doesn't have comma
    if (i === shelf.length - 1) {
      titles = titles + `${shelf[i].title}`;
    } else {
      titles = titles + `${shelf[i].title}, ` ;
    }
  }
  return titles;
}

function searchShelf(shelf, bookTitle) {
  var isOnShelf = false
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
    isOnShelf = true;
    } else {
    isOnShelf = false;
    }
  }
return isOnShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
