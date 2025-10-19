To-Do List Web Application
Overview
This is a simple, responsive To-Do List web application built using HTML, CSS, JavaScript, Bootstrap, jQuery, and Font Awesome. It allows users to add tasks, mark them as completed, and delete them with a clean and modern user interface.
Features

Add Tasks: Enter a task in the input field and click the "Add" button or press Enter to add it to the list.
Mark as Completed: Check the checkbox next to a task to mark it as completed (strikes through the text).
Delete Tasks: Click the trash can icon to remove a task with a smooth fade-out animation.
Responsive Design: Optimized for both desktop and mobile devices using Bootstrap's grid system.
Modern UI: Includes a gradient background, rounded corners, hover effects, and Font Awesome icons for a polished look.
Input Validation: Prevents adding empty tasks with an alert message.

Technologies Used

HTML5: Structure of the application.
CSS3: Custom styles for enhanced UI, including a gradient background and animations.
JavaScript/jQuery: Handles dynamic task management (add, delete, toggle completion).
Bootstrap 5.3.3: Provides responsive layout and pre-styled components.
Font Awesome 6.6.0: Adds icons for the "Add" button and delete functionality.
Google Fonts (Poppins): Custom typography for a modern look.

Setup Instructions

Clone or Download: Obtain the project files (e.g., index.html).
Host Locally:
Place the index.html file in a directory.
Open it in a web browser (e.g., Chrome, Firefox) directly or via a local server (recommended for CDN reliability).
For a local server, you can use tools like VS Code's Live Server extension or run python -m http.server in the directory.


Ensure Internet Access: The application relies on CDNs for Bootstrap, jQuery, and Font Awesome. An active internet connection is required unless you host these libraries locally.
Open in Browser: Navigate to index.html in your browser to use the application.

File Structure

index.html: The main file containing the HTML structure, CSS styles, and JavaScript logic.

Usage

Add a Task:
Type a task in the input field.
Click the "Add" button or press Enter.
The task will appear in the list below.


Complete a Task:
Click the checkbox next to a task to mark it as completed (adds a strikethrough effect).
Uncheck to revert.


Delete a Task:
Click the trash can icon next to a task to remove it with a fade-out animation.



Dependencies

Bootstrap 5.3.3: Loaded via CDN (https://cdn.jsdelivr.net/npm/bootstrap@5.3.3).
jQuery 3.7.1: Loaded via CDN (https://code.jquery.com/jquery-3.7.1.min.js).
Font Awesome 6.6.0: Loaded via CDN (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0).
Google Fonts (Poppins): Loaded via CDN (https://fonts.googleapis.com).

Troubleshooting

Icons Not Visible:
Ensure an active internet connection for Font Awesome CDN.
Check the browser console (F12) for errors related to CDN loading.
Verify the correct icon class (fas fa-trash-can for delete, fas fa-plus for add).


Layout Issues:
Confirm Bootstrap CSS and JS are loading correctly.
Test on a modern browser (Chrome, Firefox, Edge).


Local Hosting: If CDNs fail, consider downloading and hosting Bootstrap, jQuery, and Font Awesome libraries locally.

Future Enhancements

Add local storage to persist tasks across page reloads.
Implement task categories or priority levels.
Add edit functionality for tasks.
Include a "Clear All" button to remove all tasks.
Enhance animations for task addition and completion.

License
This project is open-source and available under the MIT License.