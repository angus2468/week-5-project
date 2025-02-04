//error handling for repeat items e.g you have watched this already, do you wish to add this again.
const API_URL = "http://localhost:8080/";
//hamburger/drop down menu for creation of reminders

//UI updates

//post to server updates based on reminders, watch history etc
const createNav = document.getElementById("createNav");
const createButton = document.getElementById("createButton");

const addChecklist = document.getElementById("addChecklist");
const addBooks = document.getElementById("addBooks");
const addMovies = document.getElementById("addMovies");
const addReminders = document.getElementById("addReminders");

createButton.addEventListener("click", handleCreate);

function handleCreate() {
  if (createNav.hasAttribute("hidden")) {
    createNav.removeAttribute("hidden", "");
  } else {
    createNav.setAttribute("hidden", "");
  }
}

addChecklist.addEventListener("click", checklistForm);

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
  formDiv.appendChild(submitButton)

  taskLabel.innerText = 'Item:'
  submitButton.innerText = 'Add'

  createNav.appendChild(formDiv)
  
  createForm.addEventListener('submit', (event) => {
    handleSubmit(event)
  })

  function handleSubmit(event) {
    event.preventDefault();
    createNav.innerHTML = ''
  }

}

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
    createNav.innerHTML = ''
    const taskFormData = new FormData(createForm);
    const taskData = Object.fromEntries(taskFormData);
    fetch(`http://localhost:8080/checklist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
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

  bookName.setAttribute("for", "name");
  bookNameData.setAttribute("name", "name");
  bookGenre.setAttribute("for", "genre");
  bookGenreData.setAttribute("name", "genre");
  bookAuthor.setAttribute("for", "author");
  bookAuthorData.setAttribute("name", "author");
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
  bookForm.appendChild(bookGenre);
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
    createNav.innerHTML = '';
    const bookFormData = new FormData(bookForm);
    const bookData = Object.fromEntries(bookFormData);
    fetch(`http://localhost:8080/booklist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookData),
  });
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

  nameInput.setAttribute("name", "moviename");
  genreInput.setAttribute("name", "moviegenre");
  languageInput.setAttribute("name", "movielanguage");
  nameLabel.setAttribute("for", "moviename");
  genreLabel.setAttribute("for", "moviegenre");
  languageLabel.setAttribute("for", "movielanguage");

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
    movieHandleSubmit(event);
  });

  function movieHandleSubmit(event) {
    event.preventDefault();
    createNav.innerHTML = '';
    const movieFormData = new FormData(createForm);
    const movieData = Object.fromEntries(movieFormData);
    fetch(`http://localhost:8080/moviewatchlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  });
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

  reminderTask.setAttribute("for", "reminder");
  reminderTaskData.setAttribute("name", "reminder");
  reminderDate.setAttribute("for", "reminderdate");
  reminderDateData.setAttribute("name", "reminderdate");

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
    createNav.innerHTML = ''
    const reminderFormData = new FormData(reminderForm);
    const reminderData = Object.fromEntries(reminderFormData);
    fetch(`http://localhost:8080/reminders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reminderData),
  });
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

async function displayChecklist() {
  const response = await fetch(`${API_URL}checklist`);
  const data = await response.json();
  data.rows.forEach((element) => {
    const checklistContainer = document.createElement("div");
    const checklistTask = document.createElement("p");
    checklistTask.innerText = " - " + element.task;
    const checklistbutton = document.createElement("button");
    checklistbutton.innerText = "X";
    checklistContainer.appendChild(checklistTask);
    checklistContainer.appendChild(checklistbutton);
    const checklistElement = document.getElementById("checklistSection");
    checklistElement.appendChild(checklistContainer);
  });
}

displayChecklist();
