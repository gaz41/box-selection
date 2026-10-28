// Select DOM elements
const boxes = document.querySelectorAll(".box");
const isBoxSelected = document.getElementById("isBoxSelected");
const displayBoxNum = document.getElementById("displayBoxNum");
const clearBtn = document.getElementById("clearBtn");
const copyright = document.getElementById("copy");

// Default values
let boxSelected = 0; // Variable to store value of text inside box - can be any value except 1 -10.
let isBoxPicked = false; // Flag to check if a box is picked
const msg1 = `<div>number picked&nbsp;&gt; <span class="highlight-result">${isBoxPicked}</span></div>`;
isBoxSelected.innerHTML = msg1; // Initial message true/false
displayBoxNum.textContent = "no number picked"; // Initial text to display

// Event listener for the clear button
clearBtn.addEventListener("click", clear); // Clear selections

// Function to clear selections
function clear() {
  boxSelected = 0; // Reset selected box number
  isBoxPicked = false; // Reset selection flag
  boxes.forEach((box) => box.classList.remove("highlight-box")); // Remove highlights from all boxes
  isBoxSelected.innerHTML = msg1; // Reset the message - number picked > true or false
  displayBoxNum.textContent = "no number picked"; // Reset display text
  // boxes[0].classList.add("highlight-box"); // OPTIONAL: Select first number as default value
}

// Adding click event listeners to each box
boxes.forEach((box) => {
  box.addEventListener("click", pickNumber); // Handle number picking
});

// Function to handle number selection of box
function pickNumber() {
  boxSelected = this.textContent; // Store the selected number
  boxes.forEach((box) => box.classList.remove("highlight-box")); // Remove highlight from all boxes
  this.classList.add("highlight-box"); // Highlight the selected box
  isBoxPicked = true; // Set flag indicating a box has been picked
  isBoxSelected.innerHTML = `<div>number picked&nbsp;&gt; <span class="highlight-result">${isBoxPicked}</span></div>`; // Update message display
  displayBoxNum.innerHTML = `<div>number picked&nbsp;&gt; <span class="highlight-result">${boxSelected}</span></div>`; // Update selected number display
}

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " +
  new Date().getFullYear() +
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
