const Book = (props) => {
  return (
    <div>
      <img src={props.img}></img>
      <h3>Title: {props.title}</h3>
      <h3>Author: {props.author}</h3>
      <h3>Rating: {props.rating}</h3>
    </div>
  );
};

export default Book;
