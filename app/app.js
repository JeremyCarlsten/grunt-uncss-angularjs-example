(function () {
    'use strict';
    angular.module('GruntUncssAngularExample', ['ngAnimate'])
            .controller('TodoCtrl', TodoCtrl);

    function TodoCtrl() {
        var vm = this;
        vm.todos = [
            {text: "Find Humanz", done: false},
            {text: "Eat Brainz", done: false}
        ];

        vm.getTotalTodos = function () {
            return vm.todos.length;
        };

        vm.hasTasksLeft = function () {
            return vm.getTotalTodos() > 0;
        };

        vm.addTodo = function () {
            var formText = vm.formTodoText;
            if (formText != undefined && formText.trim() != "") {
                vm.todos.push({text: formText, done: false});
            }
            vm.formTodoText = "";
        };

        vm.removeTodo = function (index) {
            vm.todos.splice(index, 1);
        };

        vm.clearCompleted = function () {
            vm.todos = _.filter(vm.todos, function (todo) {
                return !todo.done;
            });
        };
    }
})();
