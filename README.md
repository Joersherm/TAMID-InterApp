# TAMID-InterApp

A task management application built with **Node.js**, **Express**, and **Vanilla JavaScript**. This project utilizes a class-based backend to manage tasks in memory without a persistent database.

---

## 🚀 Setup & Installation

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Install Dependencies
Navigate to the `tamid_interapp` folder in your terminal and run:
```bash
npm install express

### 3. Run the Backend
Start the server by executing:
\`\`\`bash
node index.js
\`\`\`

---

## 💻 How to Use
1. **Open the App**: Launch your browser and go to \`http://localhost:3000\`.
2. **Add Tasks**: Enter a name in the input field and click "Add Task." This triggers the \`TaskMaker\` class constructor.
3. **Manage Tasks**: 
    * Click **Complete** to update the task status using the \`updateStatus\` static method.
    * Click **Delete** to remove a task using the \`deleteID\` static method.

---

## 🛠 Features Added
* **Static Memory Management**: Tasks are stored in a private static array (\`#taskList\`) within the \`TaskMaker\` class.
* **Automatic ID Generation**: A private static counter (\`#taskNumber\`) ensures every task gets a unique ID.
* **REST API Endpoints**: Built routes for GET (fetch all), ADD (create), UPDATE (complete), and DELETE.

## 📓 Developer Notes
* **Current Limitations**: Since data is stored in static class variables, the list resets whenever the server is restarted.
* **Future Improvements**: I would implement **Local Storage** or a **Database (MongoDB)** to make the data persist across server restarts.
* **Bugs Fixed**: Corrected an issue where the \`updateStatus\` method was accidentally overwriting IDs instead of updating the \`finished\` boolean.

---
Created for the TAMID Technical Track.
EOF
