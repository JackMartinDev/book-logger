/*
q - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
intitle: Returns results where the text following this keyword is found in the title.
inauthor: Returns results where the text following this keyword is found in the author.
inpublisher: Returns results where the text following this keyword is found in the publisher.
subject: Returns results where the text following this keyword is listed in the category list of the volume.
isbn: Returns results where the text following this keyword is the ISBN number.
lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
oclc: Returns results where the text following this keyword is the Online Computer Library Center number.

*/

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
