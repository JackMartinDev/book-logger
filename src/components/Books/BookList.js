import { useState } from "react";
import Book from "./Book";

const BooksList = (props) => {
  const [books, setBooks] = useState();
  const DUMMY_ARRAY = [
    { title: "Haruhi 1", author: "John", rating: "2" },
    { title: "Haruhi 2", author: "John", rating: "2" },
    { title: "Haruhi 3", author: "John", rating: "2" },
    { title: "Haruhi 4", author: "John", rating: "2" },
    { title: "Haruhi 5", author: "John", rating: "2" },
    { title: "Haruhi 6", author: "John", rating: "2" },
  ];

  //TODO ADD KEY
  //TODO CHANGE TO CONTAINS STRING
  return (
    <div>
      {DUMMY_ARRAY.filter((book) => book.title === props.bookTitle).map(
        (book) => (
          <Book
            title={book.title}
            author={book.author}
            rating={book.rating}
          ></Book>
        )
      )}
    </div>
  );
};

export default BooksList;
