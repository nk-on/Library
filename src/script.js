const addBookButton = document.querySelector(".add-book-button");
const popUp = document.querySelector(".pop-up");
const librarySection = document.querySelector(".library")
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".Author-input");
const pageNumberInput = document.querySelector(".pageNumber-input");
const readStatusInput = document.querySelector("#read-status");
const submitButton = document.querySelector(".submit-button");
const readStatusButton = document.querySelector(".read-status");
const libraryBooks = [];
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.determineReadStatusColor = function () {
        if (this.readStatus === "Read") {
            return "Checked";
        } else {
            return "unChecked";
        }
    }
};
function addBookToLibrary(event) {
    const readStatus = (readStatusInput.checked) ? "Read" : "Not Read";
    if(titleInput.value.length === 0 ||  authorInput.value.length === 0 || pageNumberInput.value.length === 0){
        alert("Fill required fields");
        return;

    };
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
           <div class = "buttons">
              <button class="read-status ${lastBook.determineReadStatusColor()}">${lastBook.readStatus}</button>
              <button class = "remove-button">Remove Book</button>
           </div>
        </div>`
    const removeBookButtons = document.querySelectorAll(".remove-button");
    removeBookButtons.forEach((book)=>{
        book.addEventListener("click",removeBook)
    })
    const readStatusButtons = document.querySelectorAll(".read-status");
    readStatusButtons.forEach((button)=>{
        button.addEventListener("click",changeReadStatus)
    })
    event.preventDefault();
    popUp.close();
};
function removeBook(){
    const bookForRemoval = this.parentNode.parentNode;
    librarySection.removeChild(bookForRemoval)
}
function changeReadStatus() {
    if (this.classList.contains("Checked")) {
        this.textContent = "Not Read";
        this.classList.remove("Checked");
        this.classList.add("unChecked");
    } else {
        this.textContent = "Read";
        this.classList.remove("unChecked");
        this.classList.add("Checked");
    }
};
addBookButton.addEventListener("click", () => {
    popUp.showModal();
});
submitButton.addEventListener("click", addBookToLibrary);