let text = document.getElementById("text");
let list = document.getElementById("list");
function add() {
  if (text.value.trim() != "") {
    let li = document.createElement("li");
    li.textContent = text.value;

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = function () {
      list.removeChild(li);
      // list.style.textDecoration = "line-through";
    };
    li.appendChild(del);
    list.appendChild(li);
    text.value = "";
  }
}
