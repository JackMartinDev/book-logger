import { useState, useEffect } from "react";
import Book from "./Book";
import "./BookList.css";
import Card from "../../UI/Card";

const DUMMY_ARRAY = [
  {
    id: "1",
    title: "Haruhi 1",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=DZQsE3HYIvQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  },
  {
    id: "2",
    title: "Haruhi 2",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=a_c-BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "3",
    title: "Haruhi 3",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=Dq2XJdDXuOIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "4",
    title: "Haruhi 4",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=kvmL5Ad5josC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "5",
    title: "Haruhi 5",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=mDrkgaOmjZYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "6",
    title: "Haruhi 6",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=tEuiXbsJofwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
];

const API_KEY = "AIzaSyDzkmn_Ru4htFD2tPEhMAgM8UUHiDevIM8";

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
              pageCount: item.pageCount,
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
