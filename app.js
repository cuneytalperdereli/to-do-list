console.log("****app.js ****");

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list")

const newUl = document.createElement("ul")
langList.appendChild(newUl);


//? addBtn event handler
addBtn.addEventListener('click',() => {
    if(!langInput.value){
        alert("Please enter a things to do.")
    }
    else{
        newUl.innerHTML += `<li>${langInput.value}</li>`;
        langInput.value = "";
    }
    langInput.focus();
});

//?deleteBTN event handler
deleteBtn.addEventListener("click",() => {
    newUl.childElementCount > 0 ? newUl.removeChild(newUl.lastElementChild) : alert("There is no item to delete.")
     
})
//?enter key event handler
langInput.addEventListener("keydown",(e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.keyCode);
    // console.log(e.code);

    if(e.keyCode === 13 ){
        addBtn.click();
    }
    if(e.keyCode === 46){
        deleteBtn.click();
    }
})




//?delete key event handler




//?onload event handler
window.addEventListener("load",() => {
    langInput.focus();
})