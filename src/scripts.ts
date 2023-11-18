document.addEventListener("DOMContentLoaded", () => {
  //Changes box1 bg color
  const button1 = document.querySelector(".button1");
  const firstSquare = document.querySelector(".box") as HTMLElement;

  if (button1 && firstSquare) {
    button1.addEventListener("click", () => {
      changeBoxColor(firstSquare, "yellow");
    });
  }

  function changeBoxColor(box: HTMLElement, color: string): void {
    box.style.backgroundColor = color;
  }
  //Changes text from "FAIL" to "SUCCESS"
  const button2 = document.querySelector(".button2");
  const box2 = document.querySelector("#box2") as HTMLElement; // Explicit cast to HTMLElement

  if (button2 && box2) {
    button2.addEventListener("click", () => {
      changeSpanText(box2, "SUCCESS");
    });
  }
});
function changeSpanText(box: HTMLElement, newText: string): void {
  const spanElement = box.querySelector("span");
  //Makes box3 invisible

  if (spanElement) {
    spanElement.textContent = newText;
  }
}

const button3 = document.querySelector(".button3");
const box3 = document.querySelector("#box3") as HTMLElement; // Explicit cast to HTMLElement

if (button3 && box3) {
  button3.addEventListener("click", () => {
    makeBoxInvisible(box3);
  });
}

function makeBoxInvisible(box: HTMLElement): void {
  box.style.display = "none";
}

//BOX4 toggle button

document.addEventListener("DOMContentLoaded", () => {
  const button4 = document.querySelector(".button4");
  const box4 = document.querySelector("#box4") as HTMLElement; // Explicit cast to HTMLElement

  if (button4 && box4) {
    button4.addEventListener("click", () => {
      toggleBoxVisibility(box4);
    });
  }
});

function toggleBoxVisibility(box: HTMLElement): void {
  const currentVisibility = window.getComputedStyle(box).visibility;

  // Toggle visibility by changing the visibility property
  box.style.visibility = currentVisibility === "hidden" ? "visible" : "hidden";
}

//Box 5 color toggle

const button5 = document.querySelector(".button5");
const box5 = document.querySelector("#box5") as HTMLElement; // Explicit cast to HTMLElement

if (button5 && box5) {
  button5.addEventListener("click", () => {
    cycleBoxColor(box5);
  });
}

const colors = ["red", "green", "blue", "orange", "purple"];
let colorIndex = 0;

function cycleBoxColor(box: HTMLElement): void {
  // Change the background color to the next color in the array
  box.style.backgroundColor = colors[colorIndex];

  // Increment the colorIndex and reset to 0 if it exceeds the array length
  colorIndex = (colorIndex + 1) % colors.length;
}

document.addEventListener("DOMContentLoaded", () => {
  const button7 = document.querySelector(".button7");

  if (button7) {
    button7.addEventListener("click", () => {
      changeColors();
    });
  }
});

function changeColors() {
  const squares = document.querySelectorAll(".box");

  squares.forEach((box) => {
    if (box instanceof HTMLElement) {
      box.style.backgroundColor = "#18D5E1";
    }
  });

  if (document.body instanceof HTMLElement) {
    document.body.style.backgroundColor = "#000000";
  }
}

// Get the input element and the display element
const userInput = document.getElementById("userInput") as HTMLInputElement;
const inputChangeP = document.querySelector<HTMLElement>(".input-text");

// Add an input event listener to the input element
userInput.addEventListener("input", () => {
  // Update the display element with the entered text
  inputChangeP.innerHTML = userInput.value;
});
