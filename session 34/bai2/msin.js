if (!localStorage.getItem('tasks')) {
    const courses = [
        {
            id: 1,
            content: 'Learn Javascript Session 01',
            dueDate: '2023-04-17',
            status: 'Pending',
            assignedTo: 'Anh Bách',
        },
        {
            id: 2,
            content: 'Learn Javascript Session 2',
            dueDate: '2023-04-17',
            status: 'Pending',
            assignedTo: 'Lâm',
        },
        {
            id: 3, 
            content: 'Learn CSS Session 1',
            dueDate: '2023-04-17',
            status: 'Pending',
            assignedTo: 'Hiếu Ci ớt ớt',
        },
    ];
    localStorage.setItem('tasks', JSON.stringify(courses));
}



let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    taskList.forEach((task, index) => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td>
                <button onclick="editTask(${task.id})" class="btn btn-sm btn-secondary">Sửa</button>
                <button onclick="deleteTask(${task.id})" class="btn btn-sm btn-danger">Xóa</button>
            </td>
        </tr>
        `;
    });
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function check(event) {
    event.preventDefault();

    const content = document.getElementById('content').value.trim();
    const dueDate = document.getElementById('date').value;
    const status = document.querySelector('select').value;
    const username = document.getElementById('username').value.trim();

    if (!content || !dueDate || status === "Choose status" || !username) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    const newTask = {
        id: Date.now(),
        content,
        dueDate,
        status,
        assignedTo: username,
    };

    taskList.push(newTask);
    renderTasks();
    event.target.reset();
}

function deleteTask(id) {
    if (confirm("Bạn có chắc muốn xóa công việc này không?")) {
        taskList = taskList.filter(task => task.id !== id);
        renderTasks();
    }
}

function editTask(id) {
    const task = taskList.find(t => t.id === id);
    if (task) {
        document.getElementById('content').value = task.content;
        document.getElementById('date').value = task.dueDate;
        document.querySelector('select').value = task.status;
        document.getElementById('username').value = task.assignedTo;

        taskList = taskList.filter(t => t.id !== id);
        renderTasks();
    }
}

renderTasks();
