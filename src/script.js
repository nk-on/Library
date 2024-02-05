const addBookButton = document.querySelector(".add-book-button");
const popUp = document.querySelector(".pop-up");
const submitButton = document.querySelector(".submit-button");
addBookButton.addEventListener("click",()=>{
    popUp.showModal()
});
submitButton.addEventListener("click",()=>{
    popUp.close();
})