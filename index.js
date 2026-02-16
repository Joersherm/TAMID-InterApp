const express = require('express'); // calls express and creates constant called express
const app = express(); //creates app itself
const port = 3000; // sets adress for website

app.use(express.static('public')); //lets specific files have full access

class TaskMaker {

  static #taskNumber = 0; //makes private
  static #taskList = [];
  id;
  name;
  finished;

  constructor(name) {
    this.name = name;
    this.finished = false;
    this.id = TaskMaker.#taskNumber;
    TaskMaker.#taskNumber++;
    TaskMaker.#taskList.push(this);
  }

  static getTasks() {
    return TaskMaker.#taskList;
  }

  static deleteID(id) {
    TaskMaker.#taskList = TaskMaker.#taskList.filter(task => task.id !== parseInt(id));
  }

  static updateStatus(id)  { 
    const task = TaskMaker.#taskList.find(task => task.id === parseInt(id));
    if (task) {
      task.finished = true;
      return true;
    }
    else {
      return false;
    }
  }

  get id() {
    return this.id;
  }

}


app.get('/', (req, res) => { // recieves specifically what user typed into browser, / = homepage, req = info from user, res = is used to return
  res.send('<h1>Tamid Test App</h1><p>The server is running!</p>'); // this is what it actually sends back
});

app.get('/tasks', (req, res) => {
  const allTasks = TaskMaker.getTasks();
  res.json(allTasks);
});

app.get('/add', (req, res) => {
   const name = req.query.name;
   if (!name) return res.send("Please provide a name!");    
   const newTask = new TaskMaker(name);
   res.json({ message: "Task created!", task: newTask });
});

app.get('/update/:id', (req, res) => {
   const success = TaskMaker.updateStatus(req.params.id);
   if (success) {
      res.send(`Task ${req.params.id} is now complete!`);
   } else {
      res.status(404).send("Task not found.");
   }
});

app.get('/delete/:id', (req, res) => {
   TaskMaker.deleteID(req.params.id);
   res.send(`Task ${req.params.id} has been removed.`);
});

app.listen(port, () => { // tells to run server in backround
  console.log(`Server is live at http://localhost:${port}`);
});

