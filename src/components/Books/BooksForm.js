import { useRef } from "react";

const BooksForm = (props) => {
  const bookTitle = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(bookTitle.current.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Book Title: </label>
      <input ref={bookTitle}></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default BooksForm;
