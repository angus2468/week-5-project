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
  formDiv.appendChild(submitButton);

  taskLabel.innerText = "Item:";
  submitButton.innerText = "Add";

  createNav.appendChild(formDiv);

  createForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  function handleSubmit(event) {
    event.preventDefault();
    createNav.innerHTML = "";
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

  createForm.appendChild(taskLabel);
  createForm.appendChild(taskInput);
  createForm.appendChild(submitButton);
  formDiv.appendChild(createForm);

  taskLabel.innerText = "Item:";
  submitButton.innerText = "Add";

  createNav.appendChild(formDiv);
  createForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  function handleSubmit(event) {
    event.preventDefault();
    const taskFormData = new FormData(createForm);
    const taskData = Object.fromEntries(taskFormData);
    fetch(`http://localhost:8080/checklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    createForm.innerHTML = "";
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

  async function handleSubmit(event) {
    event.preventDefault();
    const bookFormData = new FormData(bookForm);
    const bookData = Object.fromEntries(bookFormData);
    await fetch(`http://localhost:8080/booklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    bookForm.innerHTML = "";
    getLatestBook();
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

  createForm.appendChild(nameLabel);
  createForm.appendChild(nameInput);
  createForm.appendChild(genreLabel);
  createForm.appendChild(genreInput);
  createForm.appendChild(languageLabel);
  createForm.appendChild(languageInput);
  createForm.appendChild(submitButton);
  formDiv.appendChild(createForm);

  createNav.appendChild(formDiv);

  createForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  function handleSubmit(event) {
    event.preventDefault();
    const movieFormData = new FormData(createForm);
    const movieData = Object.fromEntries(movieFormData);
    fetch(`http://localhost:8080/moviewatchlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    });
    createForm.innerHTML = "";
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

  reminderTask.innerText = "Reminder:";
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
    const reminderFormData = new FormData(reminderForm);
    const reminderData = Object.fromEntries(reminderFormData);
    fetch(`http://localhost:8080/reminders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reminderData),
    });
    reminderForm.innerHTML = "";
  }
}

//requests for API information and display

//retrieve form data + add to database

const userForm = document.getElementById("signupForm");
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
    `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyABiSCRECheWyoruOwQs0AN81RKWe3-gsU`
  );
  const data = await response.json();
  const calenderSection = document.getElementById("calenderSection");
  calenderSection.innerHTML = "";
  const bookContainer = document.createElement("section");
  const bookTitle = document.createElement("p");
  bookTitle.innerText = data.items[1].volumeInfo.title;
  bookContainer.appendChild(bookTitle);
  const bookDate = document.createElement("p");
  bookDate.innerText = data.items[1].volumeInfo.publishedDate;
  bookContainer.appendChild(bookDate);
  const bookDescription = document.createElement("p");
  bookDescription.innerText = data.items[1].volumeInfo.description;
  bookContainer.appendChild(bookDescription);
  const bookCover = document.createElement("img");
  bookCover.src = data.items[1].volumeInfo.imageLinks.smallThumbnail;
  bookContainer.appendChild(bookCover);
  calenderSection.appendChild(bookContainer);
}

async function displayChecklist() {
  const response = await fetch(`${API_URL}checklist`);
  const data = await response.json();
  const checklistElement = document.getElementById("checklistSection");
  checklistElement.innerHTML = "";
  data.rows.forEach((element) => {
    const checklistContainer = document.createElement("div");
    const checklistTask = document.createElement("p");
    checklistTask.innerText = " - " + element.task;
    const checklistbutton = document.createElement("button");
    checklistbutton.innerText = "X";
    checklistbutton.addEventListener("click", async () => {
      await fetch(`${API_URL}checklist/${element.id}`, {
        method: "DELETE",
      });
      checklistElement.innerHTML = "";
      displayChecklist();
    });
    checklistContainer.appendChild(checklistTask);
    checklistContainer.appendChild(checklistbutton);

    checklistElement.appendChild(checklistContainer);
  });
}

displayChecklist();


async function displayMovies(movie){
  const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=72bf2de2`);

    const data = await response.json();
      const movieContainer = document.createElement("div");
      const movieName = document.createElement("h1");
      movieName.innerText = data.Title;
      const movieGenre = document.createElement("p");
      movieGenre.innerText = " - " + data.Genre;
      const moviebutton = document.createElement("button");
      moviebutton.innerText = "X";
      const movieLanguage = document.createElement("p");
      movieLanguage.innerText = " - " + data.Language;
      const moviePlot = document.createElement("p");
      moviePlot.innerText = " - " + data.Plot;
      movieContainer.appendChild(movieName);
      movieContainer.appendChild(movieGenre);
      movieContainer.appendChild(movieLanguage);
      movieContainer.appendChild(moviePlot);
      movieContainer.appendChild(moviebutton);
      const movieElement = document.getElementById("moviesSection");
      movieElement.appendChild(movieContainer);
      console.log(movieContainer);
}

displayMovies();

async function displayWeather(weather){
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2d89413830e24b93bab110358250502&q=London`);

  const data = await response.json();
  const weatherContainer = document.createElement("div");
      const myLocation = document.createElement("h3");
      myLocation.innerText = data.location.name;
      const currentWeather = document.createElement("h1");
      currentWeather.innerText = data.current.condition.text;
      const weatherImg = document.createElement("img");
      weatherImg.src = data.current.condition.icon;
      const currentTemp = document.createElement("p");
      currentTemp.innerText = data.current.temp_c + "°C";
      weatherContainer.appendChild(myLocation);
      weatherContainer.appendChild(currentTemp);
      weatherContainer.appendChild(currentWeather);
      weatherContainer.appendChild(weatherImg)
      const weatherSection = document.getElementById("remindersSection");
      weatherSection.appendChild(weatherContainer);
      console.log
}

displayWeather();

async function getLatestBook() {
  const response = await fetch(`http://localhost:8080/booklist`);
  const data = await response.json();
  const latestBook = data.rows[data.rows.length - 1].name;
  console.log(latestBook);
  fetchBookData(latestBook);
}
getLatestBook();

const openChecklistBtn = document.getElementById('checklist')

openChecklistBtn.addEventListener('click', changeForegroundChecklist)

function changeForegroundChecklist () {
  foregroundDiv.removeAttribute('hidden')
  fetchChecklistData()
}

async function fetchChecklistData() {
  const response = await fetch('http://localhost:8080/checklist')
  const data = await response.json()
  generateChecklist(data)
}

function generateChecklist(dataToRender) {
  foregroundDiv.innerHTML = ''

  for (let i = 0; i < dataToRender.rows.length; i++) {
    const checklistContainer = document.createElement('div')
    const itemDiv = document.createElement('div')
    const listItem = document.createElement('p')
    const deleteListItem = document.createElement('button')

    listItem.innerText = dataToRender.rows[i].task
    deleteListItem.innerText = 'x'

    listItem.setAttribute('class', 'listItem')
    deleteListItem.setAttribute('class', 'deleteListItem')
    
    itemDiv.appendChild(listItem)
    itemDiv.appendChild(deleteListItem)
    checklistContainer.appendChild(itemDiv)
    foregroundDiv.appendChild(checklistContainer)
  }
  
  deleteListItem.addEventListener('click', () => {
      handleDelete(dataToRender[i].id)
    })

    async function handleDelete(id) {
      const response = await fetch (`http://localhost:8080/checklist/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        fetchChecklistData()
    }
  }
}


const openMoviesBtn = document.getElementById('movies')

openMoviesBtn.addEventListener('click', changeForeground)

function changeForeground () {
  foregroundDiv.removeAttribute('hidden')
  fetchMovieData()
}

const foregroundDiv = document.getElementById('foregroundDiv')

async function fetchMovieData() {
  const response = await fetch('http://localhost:8080/moviewatchlist')
  const data = await response.json()
  generateMovie(data)
}

function generateMovie(dataToRender) {
  foregroundDiv.innerHTML = ''
  console.log(dataToRender)

  for (let i = 0; i < dataToRender.rows.length; i++) {
    const moviesContainer = document.createElement('div')
    const movieDiv = document.createElement('div')
    const movieName = document.createElement('p')
    const movieGenre = document.createElement('p')
    const movieLanguage = document.createElement('p')
    
    const deleteMovie = document.createElement('button')

    movieName.innerText = dataToRender.rows[i].moviename
    movieGenre.innerText = dataToRender.rows[i].moviegenre
    movieLanguage.innerText = dataToRender.rows[i].movielanguage
    deleteMovie.innerText = 'x'

    movieName.setAttribute('class', 'movieName')
    movieGenre.setAttribute('class', 'movieGenre')
    movieLanguage.setAttribute('class', 'movieLanguage')
    deleteMovie.setAttribute('class', 'deleteMovie')
    
    movieDiv.appendChild(movieName)
    movieDiv.appendChild(movieGenre)
    movieDiv.appendChild(movieLanguage)
    movieDiv.appendChild(deleteMovie)
    moviesContainer.appendChild(movieDiv)
    foregroundDiv.appendChild(moviesContainer)

    deleteMovie.addEventListener('click', () => {
      handleDelete(dataToRender[i].id)
    })
  
    async function handleDelete(id) {
      const response = await fetch (`http://localhost:8080/moviewatchlist/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        fetchMovieData()
      }
    }
  }
}

