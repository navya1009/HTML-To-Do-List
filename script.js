$(document).ready(function() {
// Add task on button click
$('#addTaskBtn').click(function() {
    addTask();
});

// Add task on Enter key press
$('#taskInput').keypress(function(e) {
    if (e.which === 13) {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    var taskText = $('#taskInput').val().trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    var taskItem = $('<li class="task-item"></li>');
    var checkbox = $('<input type="checkbox" class="form-check-input">');
    var taskSpan = $('<span class="task-text"></span>').text(taskText);
    var deleteBtn = $('<button class="btn delete-btn"><i class="fas fa-trash fa-solid"></i></button>');

    // Toggle completed class on checkbox change
    checkbox.change(function() {
        $(this).closest('.task-item').toggleClass('completed', this.checked);
    });

    // Delete task on button click
    deleteBtn.click(function() {
        $(this).closest('.task-item').fadeOut(300, function() {
            $(this).remove();
        });
    });

    taskItem.append(checkbox).append(taskSpan).append(deleteBtn);
    $('#taskList').append(taskItem);
    $('#taskInput').val(''); // Clear input
}
});