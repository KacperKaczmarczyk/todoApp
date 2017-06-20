angular.
module('todoList').
component('todoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: ['todo', '$scope', TaskListController]
});

function TaskListController(todo, $scope) {
    var ctrl = this;

    ctrl.newTask = {
        name: '',
        done: 'red'
    };

    //LoadList
    var handleSuccesLoadList = function(res) {
        ctrl.list = res.todos;
    };

    var loadList = function() {
        todo.getAll().then(handleSuccesLoadList).catch(handleError);
    };

    loadList();

    //handle method
    var handleSuccesAdd = function(res) {
        ctrl.list.push(res.data);
        ctrl.newTask = {
            name: '',
            done: 'red'
        };
    };

    var handleSuccesUpdate = function(res) {
        res.data._id = res.data._creator;
        var indexToChange = ctrl.list.indexOf(res.data);
        if (indexToChange !== -1) {
            ctrl.list.splice(indexToChange, 1);
        }
        ctrl.list.push(res.data);
    };

    var handleSuccesRemove = function(res) {
        //res.data.todo._id = res.data.todo._creator;
        var indexToDelete = {};
        ctrl.list.forEach(function(item) {
            if (item._id == res.data.todo._id)
            {
                indexToDelete = ctrl.list.indexOf(item);
                break;
            }
        });
        if (indexToDelete !== -1) {
            ctrl.list.splice(indexToDelete, 1);
        }
    };

    var handleError = function(res) {
        console.log(res.data);
    };

    //Methods
    ctrl.add = function() {
        todo.add(ctrl.newTask).then(handleSuccesAdd).catch(handleError);
    };

    ctrl.update = function(task) {
        todo.update(task).then(handleSuccesUpdate).catch(handleError);
    };

    ctrl.remove = function(task) {
        todo.remove(task).then(handleSuccesRemove).catch(handleError);
    };
    ctrl.change = function(task) {
        task.completed = !task.completed;
    };

}