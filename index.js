// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete

newTask = (title, description) => {
  const tasks = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    completeTask: function () {
      this.complete = true;
    },
  };
  return tasks;
};

const task1 = newTask("Clean Cat Litter", "scoop the poop"); // task 0
const task2 = newTask("Do Laundry", "the never ending task"); // task 1
const tasks = [task1, task2];

task1.logTaskState();
console.log(task1.title);
task1.completeTask();
task1.logTaskState();
