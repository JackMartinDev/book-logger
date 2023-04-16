import { useState } from "react";
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

const BooksList = (props) => {
  const [books, setBooks] = useState();

  const filteredArray = DUMMY_ARRAY.filter((book) =>
    book.title.includes(props.bookTitle)
  );

  let isEmpty;
  if (filteredArray.length === 0) isEmpty = true;

  //TODO ADD KEY

  const booksList = filteredArray.map((book) => (
    <Book
      id={book.id}
      img={book.img}
      title={book.title}
      author={book.author}
      rating={book.rating}
    ></Book>
  ));
  return (
    <div className="books">
      <Card>
        {isEmpty && <p>No books found</p>}
        <ul>{booksList}</ul>
      </Card>
    </div>
  );
};

export default BooksList;
