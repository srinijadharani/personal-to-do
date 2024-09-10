const inputBox = document.getElementById('input-box'); 
const listContainer = document.getElementById('list-container'); 

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!'); // Alert if no task is entered
    } else {
        let li = document.createElement('li'); // Create a new list item (task)
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li); 

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // '×' symbol for deleting the task
        li.appendChild(span); 
    }
    inputBox.value = ''; // Clear the input field after adding the task
    saveData(); // Save the updated task list to local storage
}

// Event listener for the Enter key to add a task
inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(); // Call addTask function when Enter key is pressed
    }
});

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); // Toggle the 'checked' class to mark task as completed
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task when delete button is clicked
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data'); // Retrieve and display the task list from local storage
}

showTask(); // Initialize the task list display when the app loads
