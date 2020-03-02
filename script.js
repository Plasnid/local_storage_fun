
function storeTitleValue(titleValue){
    localStorage.setItem("pageTitle", titleValue);
}

function clearLocalStorage(){
    localStorage.clear();
    location.reload();
}

function retrieveTitleValue(){
    let titleVal = localStorage.getItem("pageTitle");
    console.log(titleVal);
    setText(titleVal);
}

function setText(txtVal){
    let pageTitle = document.querySelector("h1");
    pageTitle.innerText = txtVal;
}

function updatePage(e){
    e.preventDefault();
    let titleText = document.querySelector("#titleText").value;
    if(titleText.length>0){
        storeTitleValue(titleText);
        setText(titleText);
    }
}

function initForm(){
    console.log("about to init the form!");
    let formBtn = document.querySelector("#formBtn");
    let clearBtn = document.querySelector("#clearBtn");
    formBtn.addEventListener("click", updatePage);
    clearBtn.addEventListener("click", clearLocalStorage);
}


document.addEventListener("DOMContentLoaded",(e)=>{
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        console.log("use local storage!");
        if(localStorage.getItem("pageTitle")){
            retrieveTitleValue();
        }
        initForm();
    } else {
        // Sorry! No Web Storage support..
        console.log("no local storage");
    }
});
