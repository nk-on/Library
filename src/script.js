const addBookButton = document.querySelector(".add-book-button");
const popUp = document.querySelector(".pop-up");
const librarySection = document.querySelector(".library")
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".Author-input");
const pageNumberInput = document.querySelector(".pageNumber-input");
const submitButton = document.querySelector(".submit-button");
const libraryBooks = [];
function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};
function addBookToLibrary(event){
    const bookObj = new Book(titleInput.value,authorInput.value,pageNumberInput.value);
    libraryBooks.push(bookObj);
    const lastBook = libraryBooks[libraryBooks.length-1];
    librarySection.innerHTML += 
        `<div>
           <h2>Title:<span>${lastBook.title}</span></h2>
           <h2>Author:<span>${lastBook.author}</span></h2>
           <h2>Pages:<span>${lastBook.pages}</span></h2>
        </div>`
    console.log(libraryBooks)
    event.preventDefault();
    popUp.close();
}
addBookButton.addEventListener("click",()=>{
    popUp.showModal();
})
submitButton.addEventListener("click",addBookToLibrary);