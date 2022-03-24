// Books store directory page
//Make headings searchable
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".search-input").forEach(inputField => {
    const tableRows = inputField.closest("table").querySelectorAll("tbody tr")
    const headerCell = inputField.closest("th");
    const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");
    const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
    const searchableCells = Array.from(tableRows)
    .map(row => row.querySelectorAll("td")[columnIndex]);

    inputField.addEventListener("input", () =>{
      const searchQuery = inputField.value.toLowerCase();

      for (const tableCell of searchableCells) {
        const row = tableCell.closest("tr");
        const value = tableCell.textContent.toLowerCase().replace(",","");

        row.style.visibility = null;

        if (value.search(searchQuery)=== -1){
          row.style.visibility = "collapes";
        }
      }
    })
  })
})


//Add New Table Rows/Book to list
function addBooktoList(){
  let tbodyRef = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  let newRow = tbodyRef.insertRow();
  let newCell = newRow.insertCell();
  let newText = document.createTextNode('new row');
newCell.appendChild(newText);

}

// Bring up Add New Entry Modal

let modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

btn.onclick = function(){
  modal.style.display = "block";
}



// // Gather all the information from the inputs from register new book entry
// let bookTitle = document.getElementsByClassName('title').value;
// let bookAuthor = document.getElementsById('author').value;
// let dateaquired = document.getElementsById('dateAq').value;
// let datePublished = document.getElementsById('datepub').value;
// let storeLocation = document.getElementsById('location').value;
// let copies = document.getElementsByClassName('copies').value;
// let price = document.getElementById('price').value;
// let staff = document.getElementsByClassName('staffEntry').value;
// let condition = document.getElemeCells

// function showBook() { 
//     document.write(newBook)
//     window.open("");
// }



// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";

// // create a function to preview the book entry in a pop up window


// // Create a function to confirm the entry for main directory

// //Book directory list display

// //search bar for book (find in list)

// //create login page credentials sign in

// //create new user login
// //Send back to login page once confirmed

//   }}
