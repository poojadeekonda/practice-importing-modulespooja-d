function addTask(tasks, task){
    return tasks.push(task);
}

function listTasks(tasks){
    for (let task of tasks) {
        console.log(task);
    }

}

module.exports = {
    addTask,
    listTasks
}