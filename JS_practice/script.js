var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var deleteBtn = document.getElementsByClassName("delete");
var li = document.querySelectorAll("li");


for (var i = 0; i < li.length; i++)
{
    li[i].addEventListener("click", done);
}

for (var i = 0; i < deleteBtn.length; i++)
{
    deleteBtn[i].addEventListener("click",delBtn, false);
}


function delBtn(evt)
{
    evt.target.removeEventListener("click", delBtn, false);
    evt.target.parentNode.remove();
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    //adds delete button with every new list creation
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.classList.add("delete");
    btn.addEventListener("click",delBtn, false);

    var li = document.createElement("li");
    li.addEventListener("click",done);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);

    ul.appendChild(li);
    input.value="";
}

function addListAfterClick() {
    if (inputLength() > 0)
    {
     createListElement();
    }
}

function addListAfterKeypress(event) {
    
    if (inputLength() > 0 && event.keyCode == 13) {
        createListElement();
    }
}


function done(e)
{
    e.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

