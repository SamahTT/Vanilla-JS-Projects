const greeting = document.querySelector('.lg-text');
const avatar = document.querySelector('.avatar');
const add_btn = document.querySelector('.add-task-btn');
const modal = document.querySelector('.add-task-window');
const cancel_btn = document.querySelector('.cancel');
const add_task_modal = document.querySelector('.add');
const task_count = document.querySelector('.task-count');
const task_content = document.querySelector('.add-task-window input');
const task_div = document.querySelector('.tasks-div');

function setGreeting() {
    const time = new Date();
    const hours = time.getHours();
    if (hours >= 5 && hours < 12) {
        greeting.textContent = "Good Morning🌞🌅";
    } else if (hours >= 12 && hours < 18) {
        greeting.textContent = "Good Afternoon🌤️☕";
    } else if (hours >= 18 && hours < 24) {
        greeting.textContent = "Good Evening🌇🌆";
    } else {
        greeting.textContent = "Good Night⭐🌌";
        avatar.src = 'night-cat-avatar.jpg';
    }
}

function update_count() {
    const tasks = document.querySelectorAll('.task'); // Update tasks collection
    if (tasks.length == 1) {
        task_count.textContent = tasks.length + ' task';
    }
    else if (tasks.length > 1) {
        task_count.textContent = tasks.length + ' tasks';
    }
    else {
        task_count.textContent = "no tasks";
    }
}

add_btn.addEventListener('click', () => {
    modal.style.display = 'block';
})

cancel_btn.addEventListener('click', () => {
    modal.style.display = 'none';
})

add_task_modal.addEventListener('click', () => {
    let taskValue = task_content.value.trim();
    if (taskValue) {
        let new_task = `<div class="task"> <input type="checkbox"><p class="task-text">${taskValue}</p><div class="x-icon"><i class="fa-solid fa-xmark" style="font-size: 1.1em; color: rgb(173, 173, 173);"></i></div></div>`;
        task_div.innerHTML += new_task;
        update_count();
        modal.style.display = 'none';
        task_content.value = '';
        delete_tasks(); // Call delete_tasks to add event listeners to the new task
    }
})

function delete_tasks() {
    const tasks = document.querySelectorAll('.task'); // Update tasks collection
    const delete_btn = document.querySelectorAll('.x-icon'); //get delete buttons 
    for (let i = 0; i < delete_btn.length; i++) {
        delete_btn[i].addEventListener('click', () => {
            tasks[i].remove(); // Remove the task from the DOM
            update_count();    // Update the task count after deletion
        });
    }
}

setGreeting();
update_count();
delete_tasks();