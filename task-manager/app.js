const tasks = require('./taskManager.js');
const files = require('./fileHandler.js');
const fs = require("fs");


let myTasks = [];
tasks.addTask(myTasks, "task 1");
tasks.addTask(myTasks, "task 2");
tasks.addTask(myTasks, "task 3");
tasks.listTasks(myTasks);


files.saveTasks('./Data/tasks.json', myTasks);
files.loadTasks('./Data/tasks.json');