let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("Reset");
let store = "X";
let status = false;
console.log(status);
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!status) {
      if (box.textContent === "") {
        box.textContent = store;
        if (store == "X") {
          box.style.backgroundColor = "blue";
        } else if (store === "O") {
          box.style.backgroundColor = "green";
        }
      }
      store = store === "X" ? "O" : "X";
      winner_check();
    }
  });
});

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.style.backgroundColor = "yellow";
    status = false;
  });
});

function winner_check() {
  let box1 = document.getElementById("1");
  let box2 = document.getElementById("2");
  let box3 = document.getElementById("3");
  let box4 = document.getElementById("4");
  let box5 = document.getElementById("5");
  let box6 = document.getElementById("6");
  let box7 = document.getElementById("7");
  let box8 = document.getElementById("8");
  let box9 = document.getElementById("9");

  let message = document.querySelector("h3");
  if (
    box1.textContent.trim() != "" &&
    box2.textContent.trim() != "" &&
    box3.textContent.trim() != "" &&
    box1.textContent === box2.textContent &&
    box2.textContent === box3.textContent
  ) {
    message.innerHTML = "WINNER: " + box1.textContent;
    status = true;
    return;
  } else if (
    box4.textContent.trim() != "" &&
    box5.textContent.trim() != "" &&
    box6.textContent.trim() != "" &&
    box4.textContent === box5.textContent &&
    box5.textContent === box6.textContent
  ) {
    message.innerHTML = "WINNER: " + box4.textContent;
    status = true;
    return;
  } else if (
    box7.textContent.trim() != "" &&
    box8.textContent.trim() != "" &&
    box9.textContent.trim() != "" &&
    box7.textContent === box8.textContent &&
    box8.textContent === box9.textContent
  ) {
    message.innerHTML = "WINNER: " + box7.textContent;
    status = true;
    return;
  } else if (
    box1.textContent.trim() != "" &&
    box4.textContent.trim() != "" &&
    box7.textContent.trim() != "" &&
    box1.textContent === box4.textContent &&
    box4.textContent === box7.textContent
  ) {
    message.innerHTML = "WINNER: " + box1.textContent;
    status = true;
    console.log(box1.textContent);
    return;
  } else if (
    box2.textContent.trim() != "" &&
    box5.textContent.trim() != "" &&
    box8.textContent.trim() != "" &&
    box2.textContent === box5.textContent &&
    box5.textContent === box8.textContent
  ) {
    message.innerHTML = "WINNER: " + box2.textContent;
    status = true;
    return;
  } else if (
    box3.textContent.trim() != "" &&
    box6.textContent.trim() != "" &&
    box9.textContent.trim() != "" &&
    box3.textContent === box6.textContent &&
    box6.textContent === box9.textContent
  ) {
    message.innerHTML = "WINNER: " + box3.textContent;
    status = true;
    return;
  } else if (
    box1.textContent.trim() != "" &&
    box5.textContent.trim() != "" &&
    box9.textContent.trim() != "" &&
    box1.textContent === box5.textContent &&
    box5.textContent === box9.textContent
  ) {
    message.innerHTML = "WINNER: " + box1.textContent;
    status = true;
    console.log(box1.textContent);
    return;
  } else if (
    box3.textContent.trim() != "" &&
    box5.textContent.trim() != "" &&
    box7.textContent.trim() != "" &&
    box3.textContent === box5.textContent &&
    box5.textContent === box7.textContent
  ) {
    message.innerHTML = "WINNER: " + box3.textContent;
    status = true;
    return;
  } else if ([...boxes].every((box) => box.textContent !== "")) {
    message.textContent = "DRAW!";
  }
}
