// app.js for ToDo List Application

// Initialize tasks array
let tasks = [];

// Function to add a task
function addTask(task) {
    tasks.push({ text: task, completed: false });
    updateUI();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateUI();
}

// Function to complete a task
function completeTask(index) {
    if (tasks[index]) {
        tasks[index].completed = true;
        updateUI();
    }
}

// Function to filter tasks
function filterTasks(filter) {
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'active') {
            return !task.completed;
        } else {
            return true;
        }
    });
    updateUI(filteredTasks);
}

// Function to export data
function exportData() {
    const dataStr = JSON.stringify(tasks);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tasks.json';
    a.click();
}

// Function to clear completed tasks
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    updateUI();
}

// Function to update the UI
function updateUI(filteredTasks = tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);

        // Add event listeners for buttons
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.onclick = () => completeTask(index);
        li.appendChild(completeBtn);
    });
}

// Example event listeners (use these in your HTML)
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input').value;
    if (taskInput) {
        addTask(taskInput);
        document.getElementById('task-input').value = '';
    }
});

document.getElementById('clear-completed-btn').addEventListener('click', clearCompleted);

// Add exports and filtering buttons similarly
