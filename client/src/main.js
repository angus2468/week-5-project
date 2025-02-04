//error handling for repeat items e.g you have watched this already, do you wish to add this again.

//hamburger/drop down menu for creation of reminders

//UI updates

//post to server updates based on reminders, watch history etc

const createNav = document.getElementById('createNav')
const createButton = document.getElementById('createButton')

createButton.addEventListener('click', handleCreate)

function handleCreate() {
  if (createNav.hasAttribute('hidden')) {
    createNav.removeAttribute('hidden', '')
  } else {
    createNav.setAttribute('hidden', '')
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
