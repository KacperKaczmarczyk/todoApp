angular.module('core.todo').
	factory('todo', function ($http) {
		var auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTQ4ZmFmODUwYjg0NDAwMTE0ZTZkMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk3OTU1MzgyfQ.zaoVKOKM6FfijBmUcxUB4aeYCKnOjlY5QtAvinpgr94';
		var login_response = {};
		var list = {};
		var url = 'https://whispering-savannah-17162.herokuapp.com';
		var get_list = {
			method: 'GET',
			url: url + '/todos',
			headers: {'x-auth': auth}
		}

		var login = {
			method: 'POST',
			url: url + '/users/login',
			email: 'test@example.com',
			password: '123456',
			headers: {'x-auth': auth}
		}

		var add = {
			method: 'POST',
			url: url + '/todos',
			data: {
				'text': '',
				'completed': 'false'
			},
			headers: {'x-auth': auth}
		}

		var remove_url = url + '/todos/'
		var remove = {
			method: 'DELETE',
			url: '',
			headers: {'x-auth': auth}
		}

		var update_url = url + '/todos/'
		var update = {
			method: 'PATCH',
			url: '',
			data : {
				'text': '',
				'completed': ''
			},
			headers: {'x-auth': auth}
		}


		return { 
			getAll: function(){
				return $http(get_list).then(function(response) {
						 list = response.data;
						return list;
					});

			},

			login: function(){
				$http(login).then(function(response) {
					console.log('login');
					login_response = response.data;
					})
				console.log('login response:' + login);
			},

			add: function(task) {
				add.data.text = task.text;
				return $http(add);
			},

			remove: function(task) {
				remove.url = remove_url + task._id;
				console.log('remove.url: ' + remove.url);
				return $http(remove);
			},

			update: function(task) {
				update.data.text = task.text;
				update.data.completed = task.completed;
				update.url = update_url + task._id;
				console.log('task: %O', update);
				console.log('update.url: ' + update.url);
				return $http(update);
			},


		}
		
	});

