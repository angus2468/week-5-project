//error handling for repeat items e.g you have watched this already, do you wish to add this again.

//hamburger/drop down menu for creation of reminders

//UI updates

//post to server updates based on reminders, watch history etc

const createNav = document.getElementById("createNav");
const createButton = document.getElementById("createButton");

const addChecklist = document.getElementById('addChecklist')
const addBooks = document.getElementById('addBooks')
const addMovies = document.getElementById('addMovies')
const addReminders = document.getElementById('addReminders')

createButton.addEventListener("click", handleCreate);

const createNav = document.getElementById("createNav");
const createButton = document.getElementById("createButton");

const addChecklist = document.getElementById("addChecklist");
const addBooks = document.getElementById("addBooks");
const addMovies = document.getElementById("addMovies");
const addReminders = document.getElementById("addReminders");

createButton.addEventListener("click", handleCreate);

createButton.addEventListener("click", handleCreate);

function handleCreate() {
  if (createNav.hasAttribute("hidden")) {
    createNav.removeAttribute("hidden", "");
  } else {
    createNav.setAttribute("hidden", "");
  }
}

addChecklist.addEventListener('click', checklistForm)

function checklistForm() {
  const formDiv = document.createElement('div')
  const createForm = document.createElement('form')
  const taskLabel = document.createElement('label')
  const taskInput = document.createElement('input')
  const submitButton = document.createElement('button')

  createForm.setAttribute('class', 'checklistForm')
  taskLabel.setAttribute('for', 'task')
  taskInput.setAttribute('name', 'task')
  taskInput.setAttribute('type', 'text')
  submitButton.setAttribute('type', 'submit')

  formDiv.appendChild(createForm)
  formDiv.appendChild(taskLabel)
  formDiv.appendChild(taskInput)

  taskLabel.innerText = 'Item:'
  submitButton.innerText = 'Add'

  createNav.appendChild(formDiv)
  
  createForm.addEventListener('submit', (event) => {
    handleSubmit(event)
  })

addChecklist.addEventListener("click", checklistForm);

function checklistForm() {
  const formDiv = document.createElement("div");
  const createForm = document.createElement("form");
  const taskLabel = document.createElement("label");
  const taskInput = document.createElement("input");
  const submitButton = document.createElement("button");

  createForm.setAttribute("class", "checklistForm");
  taskLabel.setAttribute("for", "task");
  taskInput.setAttribute("name", "task");
  taskInput.setAttribute("type", "text");
  submitButton.setAttribute("type", "submit");

  formDiv.appendChild(createForm);
  formDiv.appendChild(taskLabel);
  formDiv.appendChild(taskInput);

  taskLabel.innerText = "Item:";
  submitButton.innerText = "Add";

  createNav.appendChild(formDiv);

  createForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  function handleSubmit(event) {
    event.preventDefault();
    createNav.setAttribute("hidden", "");
  }
}

addBooks.addEventListener("click", bookForm);
function bookForm() {
  const bookDiv = document.createElement("div");
  const bookForm = document.createElement("form");
  const bookName = document.createElement("label");
  const bookNameData = document.createElement("input");
  const bookGenre = document.createElement("label");
  const bookGenreData = document.createElement("input");
  const bookAuthor = document.createElement("label");
  const bookAuthorData = document.createElement("input");
  const bookBtn = document.createElement("button");

  bookName.setAttribute("for", "bookName");
  bookNameData.setAttribute("name", "bookName");
  bookGenre.setAttribute("for", "bookGenre");
  bookGenreData.setAttribute("name", "bookGenre");
  bookAuthor.setAttribute("for", "bookAuthor");
  bookAuthorData.setAttribute("name", "bookAuthor");
  bookNameData.setAttribute("type", "text");
  bookGenreData.setAttribute("type", "text");
  bookAuthorData.setAttribute("type", "text");
  bookBtn.setAttribute("type", "submit");

  bookName.innerText = "Title:";
  bookGenre.innerText = "Genre:";
  bookAuthor.innerText = "Author:";
  bookBtn.innerText = "Add";

  bookForm.appendChild(bookName);
  bookForm.appendChild(bookNameData);
  bookForm.appendChild(bookGenreData);
  bookForm.appendChild(bookGenreData);
  bookForm.appendChild(bookAuthor);
  bookForm.appendChild(bookAuthorData);
  bookForm.appendChild(bookBtn);
  bookDiv.appendChild(bookForm);
  createNav.appendChild(bookDiv);

  bookForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  function handleSubmit(event) {
    event.preventDefault();
    createNav.setAttribute("hidden", "");
  }
}

addMovies.addEventListener("click", moviesForm);

function moviesForm() {
  const formDiv = document.createElement("div");
  const createForm = document.createElement("form");

  const nameLabel = document.createElement("label");
  const genreLabel = document.createElement("label");
  const languageLabel = document.createElement("label");

  const nameInput = document.createElement("input");
  const genreInput = document.createElement("input");
  const languageInput = document.createElement("input");

  const submitButton = document.createElement("button");

  nameInput.setAttribute("name", "name");
  genreInput.setAttribute("name", "genre");
  languageInput.setAttribute("name", "language");
  nameLabel.setAttribute("for", "name");
  genreLabel.setAttribute("for", "genre");
  languageLabel.setAttribute("for", "language");

  nameInput.setAttribute("type", "text");
  genreInput.setAttribute("type", "text");
  languageInput.setAttribute("type", "text");
  submitButton.setAttribute("type", "submit");

  nameLabel.innerText = "Title:";
  genreLabel.innerText = "Genre:";
  languageLabel.innerText = "Language:";
  submitButton.innerText = "Add";

  formDiv.appendChild(nameLabel);
  formDiv.appendChild(nameInput);
  formDiv.appendChild(genreLabel);
  formDiv.appendChild(genreInput);
  formDiv.appendChild(languageLabel);
  formDiv.appendChild(languageInput);
  formDiv.appendChild(submitButton);

  createNav.appendChild(formDiv);

  createForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  function handleSubmit(event) {
    event.preventDefault();
    createNav.setAttribute("hidden", "");
  }
}

addReminders.addEventListener("click", reminderForm);
function reminderForm() {
  const reminderDiv = document.createElement("div");
  const reminderForm = document.createElement("form");
  const reminderTask = document.createElement("label");
  const reminderTaskData = document.createElement("input");
  const reminderDate = document.createElement("label");
  const reminderDateData = document.createElement("input");
  const reminderBtn = document.createElement("button");

  reminderTask.setAttribute("for", "reminderTask");
  reminderTaskData.setAttribute("name", "reminderTask");
  reminderDate.setAttribute("for", "reminderDate");
  reminderDateData.setAttribute("name", "reminderDate");

  reminderTaskData.setAttribute("type", "text");
  reminderDateData.setAttribute("type", "date");
  reminderBtn.setAttribute("type", "submit");

  reminderTask.innerText = "Task:";
  reminderDate.innerText = "Date:";
  reminderBtn.innerText = "Add";

  reminderForm.appendChild(reminderTask);
  reminderForm.appendChild(reminderTaskData);
  reminderForm.appendChild(reminderDate);
  reminderForm.appendChild(reminderDateData);
  reminderForm.appendChild(reminderBtn);
  reminderDiv.appendChild(reminderForm);
  createNav.appendChild(reminderDiv);

  reminderForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  function handleSubmit(event) {
    event.preventDefault();
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

userForm.addEventListener("submit", (event) => {
  submitUser(event);
});

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
}

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
