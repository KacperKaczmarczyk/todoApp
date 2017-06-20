angular.
	module('todoList').
	component('todoList', {
		templateUrl: 'todo-list/todo-list.template.html',
		controller: ['todo', function TaskListController(todo,$scope) {
			var ctrl = this;
			ctrl.disabled = 'true';
			ctrl.newTask = { name: '',  done: 'red'};
			console.log('todo: ');
			todo.getAll();
	    	ctrl.list = [{
	    		name: 'wynies smieci',
	    		done: 'green'
	    	},{
	    		name: 'wynies smieci',
	    		done: 'green'
	    	},{
	    		name: 'wynies smieci',
	    		done: 'red'
	    	}];
	    	

	    	ctrl.add = function() {
	    		console.log('dodaj zadanie: ' + ctrl.newTask.name);
	    		ctrl.list.push(ctrl.newTask);
	    		ctrl.newTask = {name:'' ,  done: 'red'};
	    	};

	    	ctrl.edit = function() {
	    		console.log('edytuj zadanie disabled: ' + ctrl.disabled);
	    		ctrl.disabled = 'false';
	    		console.log('disabled: ' + ctrl.disabled);

	    	};

	    	ctrl.remove = function(task) {
	    		console.log('usun zadanie: ' + task.name);

	    		var indexToDelete = ctrl.list.indexOf(task);

		        if(indexToDelete !== -1) {
		          ctrl.list.splice(indexToDelete, 1);
		        }
	    	};

	    	ctrl.change = function(task) {
	    		console.log('change: ' + task.name);
	    		if(task.done == 'green'){
	    			task.done = 'red';
	    		}
	    		else {
	    			task.done = 'green';
	    		}
	    		
	    	};
    }]});