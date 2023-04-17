import "./Book.css";

const Book = (props) => {
  return (
    <li className="book">
      <div>
        <img src={props.img}></img>
        <h3>Title: {props.title}</h3>
        <h3>Author: {props.author}</h3>
        <h3>Page Count: {props.pageCount}</h3>
      </div>
    </li>
  );
};

export default Book;
