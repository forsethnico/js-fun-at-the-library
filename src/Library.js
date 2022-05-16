function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  } else {
  }
}

function searchShelf(shelf, bookTitle) {
  var location = -1
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      location = i;
    }
  }
  return location;
}

function checkoutBook(library, title, shelf) {
  var error = `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  var result = `You have now checked out ${title} from the ${library.name}`
  var location = -1
  if (shelf === "fantasy") {
    location = searchShelf(library.shelves.fantasy, title)
    if (location > -1) {
      library.shelves.fantasy.splice(location, 1);
    }
  }
  else if (shelf === "nonFiction") {
    location = searchShelf(library.shelves.nonFiction, title)
    if (location > -1) {
      library.shelves.nonFiction.splice(location, 1);
    }
  }
  else if (shelf === "fiction") {
    location = searchShelf(library.shelves.fiction, title)
    if (location > -1) {
      library.shelves.fiction.splice(location, 1);
    }
  }
  if (location > -1) {
    return result
  } else {
    return error
  }
}

// function checkoutBook(library, book genre) {
//   for(var i = 0; i < library.shelves[genre].length; i++) {
//     if (library.shelves[genre][i].title === book) {
//       library.shelves[genre].splice(i, 1)
//       return result
//     }
//   }
//   return error
// }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
