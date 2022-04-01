// // Books store directory page
// //Make headings searchable
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".search-input").forEach(inputField => {
//     const tableRows = inputField.closest("table").querySelectorAll("tbody tr")
//     const headerCell = inputField.closest("th");
//     const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");
//     const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
//     const searchableCells = Array.from(tableRows)
//     .map(row => row.querySelectorAll("td")[columnIndex]);

//     console.log(headerCell)
//     console.log(columnIndex)
  

//     inputField.addEventListener("input", () =>{
//       const searchQuery = inputField.value.toLowerCase();

//       for (const tableCell of searchableCells) {
//         const row = tableCell.closest("tr");
//         const value = tableCell.textContent.toLowerCase().appendChild(",","");

//         row.style.visibility = null;

//         if (value.search(searchQuery) === -1){
//           row.style.visibility = "collapes";
//         }
//       }
//     })
//   })
// })


//Add New Table Rows/Book to list
// function addBooktoList(){
//   let tbodyRef = document.getElementById("myTable").getElementsByTagName("tbody")[0];
//   let newRow = tbodyRef.insertRow();
//   let newCell = newRow.insertCell();
//   let newText = document.createTextNode('new row');
// newCell.appendChild(newText);

// }
// console.log(newCell)
// Bring up Add New Entry Modal

// let modal = document.getElementById("myModal");
// const btn = document.getElementById("button");

// btn.onclick = () => {
//   modal.style.display = "block";
// }



// // Gather all the information from the inputs from register new book entry
const bookTitle = document.getElementById("bookTitle");

let bookAuthor = document.getElementById('author');
let datePublished = document.getElementById('datepub');
let storeLocation = document.getElementById('location');
let copies = document.getElementById('copies');
let price = document.getElementById('price');
let condition = document.getElementById('conditiondrop');
let genre = document.getElementById('genre');



let bttn = document.getElementById("button1")
console.log(bttn)



function showBook() { 
  const newBook = {
    bookTitle: bookTitle.value, 
    bookAuthor:bookAuthor.value, 
    location:storeLocation.value, 
    datepub:datePublished.value,  
    price:price.value, 
    copies:copies.value, 
    genre:genre.value};

localStorage.setItem("newBookKey", JSON.stringify(newBook));

window.location.href = "/finalbookpage2.html"; 

window.onload = function () {
  let bookObject = localStorage.getItem("newBookKey");
  let bookList = JSON.parse(bookObject);
  let book = document.createElement("tr");
  let btitle = document.createElement("td");
  let bauthor = document.createElement("td");
  let bdate = document.createElement("td");
  let blocate = document.createElement("td");
  let bprice = document.createElement("td");
  let bcopy = document.createElement("td");
  let bgenre = document.createElement("td");

  btitle.innerText = bookList.bookTitle;
  bauthor.innerText = bookList.bookAuthor;
  bdate.innerText = bookList.datePublished;
  blocate.innerText = bookList.storeLocation;
  bcopy.innerText = bookList.copies;
  bprice.innerText = bookList.price;
  bgenre.innerText = bookList.genre;

  book.appendChild(btitle);
  book.appendChild(bauthor);
  book.appendChild(bdate);
  book.appendChild(blocate);
  book.appendChild(bprice);
  book.appendChild(bcopy);
  book.appendChild(bgenre);
  tbody.appendChild(book);
}}