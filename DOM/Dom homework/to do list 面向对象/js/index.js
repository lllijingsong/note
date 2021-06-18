;(function (node) {
    var TodoList = function () {
			this.node = node;
			this.dConfig = { // user must need sent;
				"plusBtn": '',
				"inputArea": '',
				"addBtn": '',
				"list": '',
				"itemClass": ''
			}
			this.config = this.getConfig();
			
			for(var k in this.dConfig) {
				if (!this.config.hasOwnProperty(k)) {
					console.log(errorInfo(k))
					return
				}
			}

    }

    TodoList.prototype = {
        getConfig: function () {
            return JSON.parse(this.node.getAttribute('data-config'));
        },

    }

		function errorInfo (key) {
			return new Error(
				'你没有配置参数'+ key + '\n'
			)
		}

    new TodoList();

    window.TodoList = TodoList;
})(document.getElementsByClassName('todo-wrap')[0]);