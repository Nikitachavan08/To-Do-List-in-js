const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//adding
function AddTask() {
  if (inputBox.value === "") {
    //if the value wiill empty it will give you alert msg
    alert("You must write something");
  } else {
    let li = document.createElement("li"); //it will create li element
    li.innerHTML = `
    ${inputBox.value}    
    <ion-icon name="pencil-outline"></ion-icon>
    `;
    //whatever text we will add in the input field that will be added in this li
    //we want display this li, this li will be displayed under the list container

    listContainer.appendChild(li);

    let span = document.createElement("span"); //code for cross(x)
    span.innerHTML = "\u00d7"; //code for cross(x)
    li.appendChild(span); //display this sapn
  }

  inputBox.value = "";
  saveData();
}

//update and delete
//for click function(for checked or unchecked)
listContainer.addEventListener(
  "click", //add event click
  function (e) {
    if (e.target.tagName === "LI") {
      // if we clicked on li it will checked
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); //if we click the span element it will delete the element
      //and it will remove the li element so the task wil be deleted
      saveData();
    } else if (e.target.tagName === "ION-ICON") {
      inputBox.value = e.target.parentElement.textContent
        .replace("\u00d7", "")
        .trim();
      // console.log(e.target.parentElement);
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  //so whatever content is there in the list container that will be stored in our browser with the name of the
}

//read
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  //so it will giv all the content stored in the browser with the name of the data
}
showTask();
