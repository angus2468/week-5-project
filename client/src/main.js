//error handling for repeat items e.g you have watched this already, do you wish to add this again.

//hamburger/drop down menu for creation of reminders

//UI updates

//post to server updates based on reminders, watch history etc

const createNav = document.getElementById("createNav");
const createButton = document.getElementById("createButton");

createButton.addEventListener("click", handleCreate);

function handleCreate() {
  if (createNav.hasAttribute("hidden")) {
    createNav.removeAttribute("hidden", "");
  } else {
    createNav.setAttribute("hidden", "");
  }
}

//requests for API information and display

//retrieve form data + add to database
const userForm = document.getElementById("userForm");
async function submitUser(event) {
  event.preventDefault();
  const userFormData = new FormData(userForm);
  const userData = Object.fromEntries(userFormData);
  fetch(`http:localhost:8080/userInfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
userForm.addEventListener("submit", submitUser);

//create new task

//setting current date for the task

function setDateValue() {
  // Check if there's a saved date in localStorage and use it, otherwise use today's date
  const savedDate = localStorage.getItem("selectedDate");
  const todayDate = new Date().toISOString().split("T")[0];
  dateSelector.value = savedDate ? savedDate : todayDate;
  // Check if the saved date is in the past and use today's date if it is
  dateSelector.value =
    dateSelector.value < todayDate ? todayDate : dateSelector.value;

async function fetchBookData(book) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book.name}&key=${GOOGLE_API_KEY}`
  );
  const data = await response.json();
  const bookContainer = document.createAttribute("section");
  const bookTitle = document.createAttribute("p");
  bookTitle.innerText = data.items[1].volumeInfo.title;
  bookContainer.appendChild(bookTitle);
  const bookDate = document.createAttribute("p");
  bookDate.innerText = data.items[1].volumeInfo.publishedDate;
  bookContainer.appendChild(bookDate);
  const bookDescription = document.createAttribute("p");
  bookDescription.innerText = data.items[1].volumeInfo.description;
  bookContainer.appendChild(bookDescription);
  const bookCover = document.createAttribute("img");
  bookCover.src = data.items[1].volumeInfo.imageLinks.smallThumbnail;
  bookContainer.appendChild(bookCover);
}
