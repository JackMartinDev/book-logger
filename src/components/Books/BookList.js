import { useState } from "react";
import Book from "./Book";

const DUMMY_ARRAY = [
  {
    title: "Haruhi 1",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=DZQsE3HYIvQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  },
  {
    title: "Haruhi 2",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=a_c-BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Haruhi 3",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=Dq2XJdDXuOIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Haruhi 4",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=kvmL5Ad5josC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Haruhi 5",
    author: "John",
    rating: "2",
    img: "http://books.google.com/books/content?id=mDrkgaOmjZYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
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
  return (
    <div>
      {isEmpty && <p>No books found</p>}
      {filteredArray.map((book) => (
        <Book
          img={book.img}
          title={book.title}
          author={book.author}
          rating={book.rating}
        ></Book>
      ))}
    </div>
  );
};

export default BooksList;
