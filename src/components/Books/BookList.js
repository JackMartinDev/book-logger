import { useState } from "react";
import Book from "./Book";

const BooksList = (props) => {
  const [books, setBooks] = useState();

  if (props.bookTitle != "") {
    const API_KEY = "AIzaSyDzkmn_Ru4htFD2tPEhMAgM8UUHiDevIM8";
    let title = "";

    title = props.bookTitle;

    const API =
      "https://www.googleapis.com/books/v1/volumes?q=+intitle:" +
      title +
      "&key=" +
      API_KEY;

    fetch(API)
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log(books);
  }

  return;
  // <div>
  //   {books.map((book) => (
  //     <Book title={book.volumeInfo.title}></Book>
  //   ))}
  // </div>
  //   );
};

export default BooksList;
