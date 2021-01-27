// * saves a value under the key of pageTitle
function storeTitleValue(titleValue){
    localStorage.setItem("pageTitle", titleValue);
}

// * removes all entries from local storage
function clearLocalStorage(){
    localStorage.clear();
    location.reload();
}

// * gets the item called pageTitle out from local storage
function retrieveTitleValue(){
    let titleVal = localStorage.getItem("pageTitle");
    console.log(titleVal);
    setText(titleVal);
}

// * sets the textin the h1 to the value sent in
function setText(txtVal){
    let pageTitle = document.querySelector("h1");
    pageTitle.innerText = txtVal;
}

// * saves the text from the input field,
// * calls to store the value in local storage, and set the text
function updatePage(e){
    e.preventDefault();
    let titleText = document.querySelector("#titleText").value;
    if(titleText.length>0){
        storeTitleValue(titleText);
        setText(titleText);
    }
}

// * setting up the clear and save buttons for the form 
function initForm(){
    console.log("about to init the form!");
    let formBtn = document.querySelector("#formBtn");
    let clearBtn = document.querySelector("#clearBtn");
    formBtn.addEventListener("click", updatePage);
    clearBtn.addEventListener("click", clearLocalStorage);
}

// * the first element we run, on dom content loading
document.addEventListener("DOMContentLoaded",(e)=>{
    // * check to see if there is support for local storage
    if (typeof(Storage) !== "undefined") {
        // * Code for localStorage/sessionStorage.
        console.log("use local storage!");
        if(localStorage.getItem("pageTitle")){
            retrieveTitleValue();
        }
        initForm();
    } else {
        // * Sorry! No Web Storage support..
        console.log("no local storage");
    }
});
