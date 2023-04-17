import { useRef } from "react";
import "./BooksForm.css";
import Card from "../../UI/Card";

const BooksForm = (props) => {
  const bookTitle = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(bookTitle.current.value);
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <label>Book Title: </label>
        <input ref={bookTitle}></input>
        <button type="submit">Search</button>
      </form>
    </Card>
  );
};

export default BooksForm;
