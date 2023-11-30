function showInput() {
    document.getElementById('inputContainer').classList.toggle('hidden');
}

function addTask() {
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    if (name && description && category) {

        let taskList = document.getElementById('taskList');

        let taskItem = document.createElement('li');
        taskItem.classList.add(category);
        taskItem.innerHTML = `<strong>${name}</strong>: ${description}`;

        taskItem.addEventListener('click', function() {
            if (taskItem.style.textDecoration === 'line-through') {
                taskItem.style.textDecoration = 'none';
            } else {
                taskItem.style.textDecoration = 'line-through';
            }
        });

        taskList.appendChild(taskItem);
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
    }
}
