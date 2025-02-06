//error handling for repeat items e.g you have watched this already, do you wish to add this again.
const API_URL = "https://week-5-project.onrender.com/";
//hamburger/drop down menu for creation of reminders

//UI updates
//UI for signin/signup
const signup = document.getElementById("signup");
const login = document.getElementById("login");
const toggle = document.getElementById("toggle");
const formSection = document.getElementById("form-section-sl");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signUpBtn");
const loginContainer = document.getElementById("form-background");

signup.addEventListener("click", () => {
  toggle.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  toggle.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});
//post to server updates based on reminders, watch history etc
const createNav = document.getElementById("createNav");
const createButton = document.getElementById("createButton");

const addChecklist = document.getElementById("addChecklist");
const addBooks = document.getElementById("addBooks");
const addMovies = document.getElementById("addMovies");

createButton.addEventListener("click", handleCreate);
const clear = document.getElementById("Clear");
clear.addEventListener("click", () => {
  const formdiv = document.getElementsByClassName("checklistForm");
  formdiv.innerHTML = "";
});
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
  const checklistCloseButton = document.createElement("button");
  checklistCloseButton.innerText = "X";
  checklistCloseButton.addEventListener("click", () => {
    formDiv.innerHTML = "";
  });

  createForm.setAttribute("class", "checklistForm");
  taskLabel.setAttribute("for", "task");
  taskInput.setAttribute("name", "task");
  taskInput.setAttribute("type", "text");
  submitButton.setAttribute("type", "submit");

  createForm.appendChild(taskLabel);
  createForm.appendChild(taskInput);
  createForm.appendChild(submitButton);
  createForm.appendChild(checklistCloseButton);
  formDiv.appendChild(createForm);

  taskLabel.innerText = "Item:";
  submitButton.innerText = "Add";

  createNav.appendChild(formDiv);
  createForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });
  const clear = document.getElementById("Clear");
  clear.addEventListener("click", () => {
    createForm.innerHTML = "";
    formDiv.appendChild(createForm);
  });

  function handleSubmit(event) {
    event.preventDefault();
    const taskFormData = new FormData(createForm);
    const taskData = Object.fromEntries(taskFormData);
    fetch(`${API_URL}checklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    createForm.innerHTML = "";
    fetchChecklistData();
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
  const bookCloseButton = document.createElement("button");
  bookCloseButton.innerText = "X";
  bookCloseButton.addEventListener("click", () => {
    bookDiv.innerHTML = "";
  });

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
  bookForm.appendChild(bookCloseButton);
  bookDiv.appendChild(bookForm);
  createNav.appendChild(bookDiv);

  bookForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });
  const clear = document.getElementById("Clear");
  clear.addEventListener("click", () => {
    bookForm.innerHTML = "";
    createNav.appendChild(bookForm);
  });
  async function handleSubmit(event) {
    event.preventDefault();
    const bookFormData = new FormData(bookForm);
    const bookData = Object.fromEntries(bookFormData);
    await fetch(`${API_URL}booklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    bookForm.innerHTML = "";
    getLatestBook();
    fetchBookData();
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
  const moviesCloseButton = document.createElement("button");
  moviesCloseButton.innerText = "X";
  moviesCloseButton.addEventListener("click", () => {
    formDiv.innerHTML = "";
  });

  nameInput.setAttribute("name", "moviename");
  genreInput.setAttribute("name", "moviegenre");
  languageInput.setAttribute("name", "movielanguage");
  nameInput.setAttribute("type", "text");
  genreInput.setAttribute("type", "text");
  languageInput.setAttribute("type", "text");
  nameLabel.setAttribute("for", "moviename");
  genreLabel.setAttribute("for", "moviegenre");
  languageLabel.setAttribute("for", "movielanguage");

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
  createForm.appendChild(moviesCloseButton);
  formDiv.appendChild(createForm);

  createNav.appendChild(formDiv);

  createForm.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  const clear = document.getElementById("Clear");
  clear.addEventListener("click", () => {
    createForm.innerHTML = "";
    formDiv.appendChild(createForm);
  });
  function handleSubmit(event) {
    event.preventDefault();
    const movieFormData = new FormData(createForm);
    const movieData = Object.fromEntries(movieFormData);
    fetch(`${API_URL}moviewatchlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    });
    createForm.innerHTML = "";
    getLatestMovie();
    fetchMovieData();
  }
}

//requests for API information and display

//retrieve form data + add to database

const signUpForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
async function submitUser(event) {
  event.preventDefault();
  const userFormData = new FormData(signUpForm);
  const userData = Object.fromEntries(userFormData);
  fetch(`${API_URL}userInfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  console.log(userData);
}

signUpForm.addEventListener("submit", (event) => {
  submitUser(event);
});
async function loginUser(event) {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const loginData = Object.fromEntries(formData);
  const response = await fetch(`http://localhost:8080/userInfo`);
  const users = await response.json();
  console.log(users);
  users.rows.forEach((user) => {
    if (
      user.username === loginData.username &&
      user.password === loginData.password
    ) {
      console.log("login successful!");
      hideLSPg();
    } else if (
      user.username !== loginData.username ||
      user.password !== loginData.password
    ) {
      console.log("Invalid username or password");
    }
  });
}
loginBtn.addEventListener("click", loginUser);
function hideLSPg() {
  loginContainer.hidden = true;
}
signupBtn.addEventListener("click", hideLSPg);

// signUpForm.addEventListener("submit", submitUser);
//create a array that loops through userinfo and only recieves username and password

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
  const bookSection = document.getElementById("bookSection");
  bookSection.innerHTML = "";
  const bookContainer = document.createElement("section");
  const textDiv = document.createElement("section");
  textDiv.setAttribute("class", "bookTextDiv");
  bookContainer.setAttribute("class", "bookContainer");
  const h2Title = document.createElement("h2");
  h2Title.innerText = `Your current book!`;
  h2Title.setAttribute("class", "currentBook");
  textDiv.appendChild(h2Title);
  const bookTitle = document.createElement("p");
  bookTitle.innerText = `Title: ${data.items[0].volumeInfo.title}`;
  textDiv.appendChild(bookTitle);
  const bookDate = document.createElement("p");
  bookDate.innerText = `Date published: ${data.items[0].volumeInfo.publishedDate}`;
  textDiv.appendChild(bookDate);
  const bookDescription = document.createElement("p");
  bookDescription.innerText = `Description: ${data.items[0].volumeInfo.description}`;
  textDiv.appendChild(bookDescription);
  const bookCover = document.createElement("img");
  console.log(data.items[0].volumeInfo);
  bookCover.src = data.items[0].volumeInfo.imageLinks.smallThumbnail;
  bookContainer.appendChild(textDiv);
  bookContainer.appendChild(bookCover);
  bookSection.appendChild(bookContainer);
}

async function displayChecklist() {
  const response = await fetch(`${API_URL}checklist`);
  const data = await response.json();
  const checklistElement = document.getElementById("checklistSection");
  checklistElement.innerHTML = "";
  data.rows.forEach((element) => {
    const checklistContainer = document.createElement("div");
    checklistContainer.setAttribute("class", "checklistItem");
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

async function displayMovies(movie) {
  const option = {
    method: "get",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDRhNGNhYTJjYTc4YzA3ZDIzODk1NWRjNmU2ZmQ1OSIsIm5iZiI6MTczODgzMjg3OC4zNywic3ViIjoiNjdhNDdiZWUyZjQ0ZjgyYWQzMmZlOGI0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CyFTSze3QSe46-VBUpp8-tikM-eIMeKAkNW69Nxg2vg",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    option
  );
  const data = await response.json();
  const movieSection = document.getElementById("moviesSection");
  movieSection.innerHTML = "";
  const movieContainer = document.createElement("section");
  const textDiv = document.createElement("section");
  movieContainer.setAttribute("class", "movieContainer");
  const h2Title = document.createElement("h2");
  h2Title.innerText = `Your current Movie!`;
  h2Title.setAttribute("class", "currentMovie");
  textDiv.appendChild(h2Title);
  const movieTitle = document.createElement("p");
  movieTitle.innerText = `Title: ${data.results[0].title}`;
  textDiv.appendChild(movieTitle);
  const movieDate = document.createElement("p");
  movieDate.innerText = `Date published: ${data.results[0].release_date}`;
  textDiv.appendChild(movieDate);
  const movieDescription = document.createElement("p");
  movieDescription.innerText = `Description: ${data.results[0].overview}`;
  textDiv.appendChild(movieDescription);
  const movieCover = document.createElement("img");
  // const bookCoverPicture = async function(){
  //   const res = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/images`, option)
  //   const datacover = await res.json()
  // }
  movieCover.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.results[0].poster_path}`;
  movieContainer.appendChild(textDiv);
  movieContainer.appendChild(movieCover);
  movieSection.appendChild(movieContainer);
}

async function getLatestMovie() {
  const response = await fetch(`${API_URL}moviewatchlist`);
  const data = await response.json();
  const latestMovie = data.rows[data.rows.length - 1].moviename;
  console.log(latestMovie);
  displayMovies(latestMovie);
}
getLatestMovie();

async function displayWeather(weather) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=2d89413830e24b93bab110358250502&q=London`
  );

  const data = await response.json();
  const weatherSection = document.getElementById("weatherSection");
  weatherSection.innerHTML = "";
  const weatherContainer = document.createElement("div");
  const myLocation = document.createElement("h3");
  myLocation.setAttribute("class", "myLocation")
  myLocation.innerText = data.location.name;
  const currentWeather = document.createElement("h1");
  currentWeather.setAttribute("class", "currentWeather")
  currentWeather.innerText = data.current.condition.text;
  const weatherImg = document.createElement("img");
  weatherImg.src = data.current.condition.icon;
  const currentTemp = document.createElement("p");
  currentTemp.innerText = data.current.temp_c + "°C";
  weatherContainer.appendChild(myLocation);
  weatherContainer.appendChild(currentTemp);
  weatherContainer.appendChild(currentWeather);
  weatherContainer.appendChild(weatherImg);
  weatherSection.appendChild(weatherContainer);
  console.log;
}

displayWeather();

async function getLatestBook() {
  const response = await fetch(`${API_URL}booklist`);
  const data = await response.json();
  const latestBook = data.rows[data.rows.length - 1].name;
  console.log(latestBook);
  fetchBookData(latestBook);
}
getLatestBook();

const openChecklistBtn = document.getElementById("checklist");
const checklistPageDiv = document.getElementById("checklistPageDiv");

openChecklistBtn.addEventListener("click", changeForegroundChecklist);

function changeForegroundChecklist() {
  checklistPageDiv.removeAttribute("hidden");
  fetchChecklistData();
}

async function fetchChecklistData() {
  const response = await fetch(`${API_URL}checklist`);
  const data = await response.json();
  generateChecklist(data);
}

function generateChecklist(dataToRender) {
  checklistPageDiv.innerHTML = "";

  for (let i = 0; i < dataToRender.rows.length; i++) {
    const checklistContainer = document.createElement("div");
    const itemDiv = document.createElement("div");
    const listItem = document.createElement("p");
    const deleteListItem = document.createElement("button");

    listItem.innerText = dataToRender.rows[i].task;
    deleteListItem.innerText = "x";

    listItem.setAttribute("class", "listItem");
    deleteListItem.setAttribute("class", "deleteListItem");
    checklistContainer.setAttribute("class", "checklistPageItem");

    itemDiv.appendChild(deleteListItem);
    itemDiv.appendChild(listItem);
    checklistContainer.appendChild(itemDiv);
    checklistPageDiv.appendChild(checklistContainer);

    deleteListItem.addEventListener("click", () => {
      handleDelete(dataToRender.rows[i].id);
    });

    async function handleDelete(id) {
      const response = await fetch(`${API_URL}checklist/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchChecklistData();
      }
    }
  }
}

const openBooksBtn = document.getElementById("books");
const bookPageDiv = document.getElementById("bookPageDiv");

openBooksBtn.addEventListener("click", changeForegroundBooks);

function changeForegroundBooks() {
  bookPageDiv.removeAttribute("hidden");
  checklistPageDiv.setAttribute("hidden", "");
  moviePageDiv.setAttribute("hidden", "");
  fetchBookPageData();
}

async function fetchBookPageData() {
  const response = await fetch(`${API_URL}booklist`);
  const data = await response.json();
  generateBooks(data);
}

function generateBooks(dataToRender) {
  bookPageDiv.innerHTML = "";
  console.log(dataToRender);

  for (let i = 0; i < dataToRender.rows.length; i++) {
    const booksContainer = document.createElement("div");
    const booksDiv = document.createElement("div");
    const bookName = document.createElement("p");
    const bookGenre = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const deleteBook = document.createElement("button");

    bookName.innerText = dataToRender.rows[i].name;
    bookGenre.innerText = dataToRender.rows[i].genre;
    bookAuthor.innerText = dataToRender.rows[i].author;
    deleteBook.innerText = "x";

    bookName.setAttribute("class", "bookName");
    bookGenre.setAttribute("class", "bookGenre");
    bookAuthor.setAttribute("class", "bookLanguage");
    deleteBook.setAttribute("class", "deleteBook");
    booksContainer.setAttribute("class", "bookPageItem");

    booksDiv.appendChild(deleteBook);
    booksDiv.appendChild(bookName);
    booksDiv.appendChild(bookGenre);
    booksDiv.appendChild(bookAuthor);
    booksContainer.appendChild(booksDiv);
    bookPageDiv.appendChild(booksContainer);

    deleteBook.addEventListener("click", () => {
      handleDelete(dataToRender.rows[i].id);
    });

    async function handleDelete(id) {
      const response = await fetch(`${API_URL}booklist/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchBookData();
      }
    }
  }
}

const openMoviesBtn = document.getElementById("movies");
const moviePageDiv = document.getElementById("moviePageDiv");

openMoviesBtn.addEventListener("click", changeForeground);

function changeForeground() {
  moviePageDiv.removeAttribute("hidden");
  fetchMovieData();
}

const foregroundDiv = document.getElementById("foregroundDiv");

async function fetchMovieData() {
  const response = await fetch(`${API_URL}moviewatchlist`);
  const data = await response.json();
  generateMovie(data);
}

function generateMovie(dataToRender) {
  moviePageDiv.innerHTML = "";
  console.log(dataToRender);

  for (let i = 0; i < dataToRender.rows.length; i++) {
    const moviesContainer = document.createElement("div");
    const movieDiv = document.createElement("div");
    const movieName = document.createElement("p");
    const movieGenre = document.createElement("p");
    const movieLanguage = document.createElement("p");

    const deleteMovie = document.createElement("button");

    movieName.innerText = dataToRender.rows[i].moviename;
    movieGenre.innerText = dataToRender.rows[i].moviegenre;
    movieLanguage.innerText = dataToRender.rows[i].movielanguage;
    deleteMovie.innerText = "x";

    movieName.setAttribute("class", "movieName");
    movieGenre.setAttribute("class", "movieGenre");
    movieLanguage.setAttribute("class", "movieLanguage");
    deleteMovie.setAttribute("class", "deleteMovie");
    moviesContainer.setAttribute("class", "moviePageItem");

    movieDiv.appendChild(deleteMovie);
    movieDiv.appendChild(movieName);
    movieDiv.appendChild(movieGenre);
    movieDiv.appendChild(movieLanguage);
    moviesContainer.appendChild(movieDiv);
    moviePageDiv.appendChild(moviesContainer);

    deleteMovie.addEventListener("click", () => {
      handleDelete(dataToRender.rows[i].id);
    });

    async function handleDelete(id) {
      const response = await fetch(`${API_URL}moviewatchlist/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchMovieData();
      }
    }
  }
}
//nav dropdown for mobile ver
const menuBtn = document.getElementById("menuToggle");
const navDropdown = document.getElementById("nav-dropdown");
menuBtn.addEventListener("click", () => {
  navDropdown.classList.toggle("active");
});

const home = document.getElementById("home");
home.addEventListener("click", () => {
  const bookPageDiv = document.getElementById("bookPageDiv");
  bookPageDiv.setAttribute("hidden", "");
  const moviePageDiv = document.getElementById("moviePageDiv");
  moviePageDiv.setAttribute("hidden", "");
  const checklistPageDiv = document.getElementById("checklistPageDiv");
  checklistPageDiv.setAttribute("hidden", "");
});
