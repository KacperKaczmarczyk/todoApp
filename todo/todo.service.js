angular.module('core.todo').
	factory('todo', function ($http) {
		console.log('factory');
		var req = {
			method: 'GET',
			url: 'https://whispering-savannah-17162.herokuapp.com/todos',
			headers: {
				'Content-Type': 'application/json',
				'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTQ4ZmFmODUwYjg0NDAwMTE0ZTZkMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk3OTU1MzgyfQ.zaoVKOKM6FfijBmUcxUB4aeYCKnOjlY5QtAvinpgr94',
			}
		}
		var list = {};
		return { 

			getAll: function(){
				$http(req).then(function(response) {
					console.log('factory2');
					list = response.data;
					})
				console.log('list' + list);
			}
		}
		
	});

