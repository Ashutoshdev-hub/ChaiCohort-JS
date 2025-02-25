// Sabse pehle DOM elements ko select karenge
const taskInput = document.getElementById("taskInput"); // Input field
const addButton = document.getElementById("addButton"); // Add button
const taskList = document.getElementById("taskList"); // Task list UL
const totalTasks = document.getElementById("totalTasks"); // Total task count
const completedTasks = document.getElementById("completedTasks"); // Completed task count

let taskCount = 0; // Total task count
let completedCount = 0; // Completed task count

// Function jo ek new task list me add karega
function addTask() {
  const taskText = taskInput.value.trim(); // Input value le rahe hain, extra spaces hatakar

  if (taskText === "") {
    alert("⚠️ Please enter a task!"); // Agar empty hai to alert dikhao
    return;
  }

  // Naya task create karenge
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item"); // CSS ke liye class add kar rahe hain
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="complete-btn">✔</button>
    <button class="delete-btn">❌</button>
  `;

  // Task list me append karenge
  taskList.appendChild(taskItem);
  taskInput.value = ""; // Input field clear karenge
  taskCount++; // Total task count badayenge
  updateStats(); // Stats ko update karenge

  // Agar pehle "No tasks yet" dikh raha hai, to use hata do
  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) {
    emptyMessage.remove();
  }

  // Complete button pe event listener lagayenge
  const completeButton = taskItem.querySelector(".complete-btn");
  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed"); // Completed task ko toggle karenge
    if (taskItem.classList.contains("completed")) {
      completedCount++;
    } else {
      completedCount--;
    }
    updateStats(); // Stats update karenge
  });

  // Delete button pe event listener lagayenge
  const deleteButton = taskItem.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    taskItem.remove(); // Task list se hata do
    taskCount--; // Total count ghatao
    if (taskItem.classList.contains("completed")) {
      completedCount--; // Agar completed task delete ho raha hai to completed count bhi ghatao
    }
    updateStats(); // Stats update karo

    // Agar list khali ho gayi to "No tasks yet" message wapas show karo
    if (taskList.children.length === 0) {
      taskList.innerHTML = `<li class="empty-list">No tasks yet. Add one above!</li>`;
    }
  });
}

// Function jo task stats update karega
function updateStats() {
  totalTasks.textContent = `Total tasks: ${taskCount}`;
  completedTasks.textContent = `Completed: ${completedCount}`;
}

// Add button pe event listener lagayenge
addButton.addEventListener("click", addTask);

// Agar user "Enter" press kare to bhi task add ho
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

