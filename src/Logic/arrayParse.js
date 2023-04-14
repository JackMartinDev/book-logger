const ArrayParse = (array) => {
  return { title: array.title, author: array.author, rating: array.rating };
};

const API_KEY = "AIzaSyDzkmn_Ru4htFD2tPEhMAgM8UUHiDevIM8";
let title = "";

title = prompt("Enter title");

var books;

const API =
  "https://www.googleapis.com/books/v1/volumes?q=+intitle:" +
  title +
  "&key=" +
  API_KEY;

fetch(API)
  .then((response) => response.json())
  .then((data) => console.log(data));
