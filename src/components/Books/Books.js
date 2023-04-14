import BooksForm from "./BooksForm";
import BooksList from "./BookList";
import React, { useState } from "react";

const Books = () => {
  const [bookTitle, setBookTitle] = useState("");

  const onFormSubmitHandler = (book) => {
    setBookTitle(book);
  };
  return (
    <React.Fragment>
      <BooksForm onSubmit={onFormSubmitHandler} />
      <BooksList bookTitle={bookTitle} />
    </React.Fragment>
  );
};

export default Books;
