const addTaskButton = document.getElementById("add_task");

const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;

function addTask(description, dueTime) {
    const taskList = document.getElementById("task_list");

    const dueTimeNode = document.createElement("span");
    dueTimeNode.setAttribute("class", "due");
    dueTimeNode.textContent =moment(dueTime).endOf('hour').fromNow();

    const newTask = document.createElement("li");
    newTask.append(description, dueTimeNode)
    taskList.append(newTask);
}

addTaskButton.addEventListener("click", () => {
    const dueDateInput= document.getElementById("duedate_input");
    const dueTimeInput= document.getElementById("duetime_input");
    const descriptionInput= document.getElementById("task_input");

    const description= descriptionInput.value;
    const dueTime= dueTimeInput.valueAsNumber;
    const dueDate= dueDateInput.valueAsNumber;
    const fullDueDate = dueDate+ dueTime + timezoneOffset;

    addTask(description, fullDueDate);

    descriptionInput.value= '';
});