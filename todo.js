// Variables ----------------------------------------------------------------------------------------------
const form = document.querySelector("#form");
const taskList = document.querySelector(".taskList");
const search = document.querySelector("#search");
const taskInput = document.querySelector("#task");


//Event Listeners ----------------------------------------------------------------------------------------------
loadEventListeners();
function loadEventListeners() {
  
  // Add Task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Search tasks
  search.addEventListener("keyup", searchTask);
  
}


// ADD NEW TASK ----------------------------------------------------------------------------------------------
function addTask(e) {
  if (taskInput.value === "") {
    alert("Oops, please add a task");
    e.preventDefault();
  }
  else if (taskInput.value !== "") {
    const li = document.createElement("li");                     // Create
    li.className = "taskList black white-text";                  // Add class
    li.appendChild(document.createTextNode(taskInput.value));    // Create a text Node  and append to li
    const link = document.createElement("a");                    // Create new link element
    li.style = "padding-top:5px;padding-left:20px;background:#fff;height:40px;line-height:40px;color:#666;"; //STYLING
    link.className = "delete-item secondary-content";            // add class
    li.appendChild(link);                                        // append to li
    taskList.appendChild(li);                                    // append the li to ul
    link.innerHTML = '<span><i class="fa fa-trash"></i></span>'; // add icon html
    taskInput.value = "";                                        // clear input
    e.preventDefault();
  }
}


//SEARCH TASKS BY KEYWORD ----------------------------------------------------------------------------------------------
function searchTask(e) {
	const text = e.target.value.toLowerCase();
	document.querySelectorAll(".taskList").forEach(function (task) {
	  const item = task.firstChild.textContent;
	  if (item.toLowerCase().indexOf(text) != -1) {
		  task.style.display = "block";
    }
    else {
		  task.style.display = "none";
	  }
	});
  }


// DELETE EXISTING TASK ----------------------------------------------------------------------------------------------
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to delete?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}