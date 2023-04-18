import { useState, useEffect } from "react";
import Book from "./Book";
import "./BookList.css";
import Card from "../../UI/Card";

const API_KEY = "Hidden";

const BooksList = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let title = props.bookTitle;
    const API =
      "https://www.googleapis.com/books/v1/volumes?q=+intitle:" +
      title +
      "&key=" +
      API_KEY;

    //Add try and catch to prevent errors when values are not found
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(
          data.items.map((item) => {
            let checkedImg =
              "https://serpstat.com/files/img/34/1676542462.4999.png";
            if ("imageLinks" in item.volumeInfo) {
              checkedImg = item.volumeInfo.imageLinks.thumbnail;
            }
            return {
              id: item.id,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              pageCount: item.volumeInfo.pageCount,
              img: checkedImg,
            };
          })
        );
      });
  }, [props.bookTitle]);

  // const filteredArray = DUMMY_ARRAY.filter((book) =>
  //   book.title.includes(props.bookTitle)
  // );

  const booksList = books.map((book) => (
    <Book
      key={book.id}
      img={book.img}
      title={book.title}
      author={book.author}
      pageCount={book.pageCount}
    ></Book>
  ));
  return (
    <div className="books">
      <Card>
        {books.length === 0 && <p>No books found</p>}
        <ul>{booksList}</ul>
      </Card>
    </div>
  );
};

export default BooksList;
