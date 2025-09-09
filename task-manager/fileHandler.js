const fs = require("fs");

function saveTasks(filePath, tasks){
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

function loadTasks(filePath){
    if (fs.existsSync(filePath)) {
        let taskFile = fs.readFileSync(filePath);
        let taskFileArr = JSON.parse(taskFile);
        return taskFileArr;
    } else {
        return [];
    }
}

module.exports = {
    saveTasks,
    loadTasks
}