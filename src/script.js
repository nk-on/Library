const addBookButton = document.querySelector(".add-book-button");
const popUp = document.querySelector(".pop-up");
const librarySection = document.querySelector(".library")
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".Author-input");
const pageNumberInput = document.querySelector(".pageNumber-input");
const readStatusInput= document.querySelector("#read-status");
const submitButton = document.querySelector(".submit-button");
const readStatus = document.querySelector(".read-status")
const libraryBooks = [];
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.determineReadStatus = function(){
        if(this.readStatus === "Have read"){
            return "Checked";
        }else{
            return "haveNotChecked";
        }
    }
};
function addBookToLibrary(event) {
    console.log(readStatusInput.checked)
    const readStatus = (readStatusInput.checked) ? "Have read":"Have not read";
    const bookObj = new Book(titleInput.value, authorInput.value, pageNumberInput.value, readStatus);
    libraryBooks.push(bookObj);
    const lastBook = libraryBooks[libraryBooks.length - 1];
    librarySection.innerHTML +=
        `<div class = "book-item">
           <div>
             <h3>Title:</h3><span>${lastBook.title}</span>
           </div>
           <div>
              <h3>Author:</h3><span>${lastBook.author}</span>
           </div>
           <div>
              <h3>Pages:</h3><span>${lastBook.pages}</span>
           </div>
           <button class="read-status ${lastBook.determineReadStatusColor()}">${lastBook.readStatus}</button>
        </div>`
    event.preventDefault();
    popUp.close();
};
addBookButton.addEventListener("click", () => {
    popUp.showModal();
})
submitButton.addEventListener("click", addBookToLibrary);