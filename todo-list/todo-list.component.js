angular.
	module('todoList').
	component('todoList', {
		templateUrl: 'todo-list/todo-list.template.html',
		controller: ['todo', function TaskListController(todo,$scope) {
			var ctrl = this;
			ctrl.disabled = 'true';
			ctrl.newTask = { name: '',  done: 'red'};
			
	    	var promise = function(){
	    		todo.getAll().then(function(result){
	    		ctrl.list = result.todos;
	    		console.log('lislt: %O', result.todos);
	    		});
	    	};
	    	
			ctrl.list = promise();


	    	ctrl.add = function() {
	    		console.log('dodaj zadanie: ' + ctrl.newTask.name);
	    		todo.add(ctrl.newTask).then(function(){
	    			ctrl.list = promise();
	    		});
	    	};

	    	ctrl.update = function(task) {
	    		todo.update(task).then(function(){
	    			ctrl.list = promise();
	    		});
	    	};

	    	ctrl.remove = function(task) {
	    		console.log('usun zadanie: ' + task.text);
	    		todo.remove(task).then(function(){
	    			ctrl.list = promise();
	    		});
	    	};

	    	ctrl.change = function(task) {
	    		console.log('change: ' + task.text);
	    		if(task.completed == true){
	    			task.completed = false;
	    		}
	    		else {
	    			task.completed = true;
	    		}
	    		
	    	};
    }]});