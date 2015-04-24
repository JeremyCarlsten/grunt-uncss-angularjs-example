'use strict';

angular.module('GruntUncssAngularExample', ['ngAnimate'])
        .controller('TodoCtrl', TodoCtrl);

TodoCtrl.$inject = ['$scope'];

function TodoCtrl($scope) {
    $scope.todos = [
        {text: "Find Humanz", done: false},
        {text: "Eat Brainz", done: false}
    ];

    $scope.getTotalTodos = function(){
       return $scope.todos.length;
    };

    $scope.hasTasksLeft = function(){
       return $scope.getTotalTodos() > 0;
    };

    $scope.addTodo = function () {
        var formText = $scope.formTodoText;
        if (formText != undefined && formText.trim() != "") {
            $scope.todos.push({ text: formText, done: false });
        }
        $scope.formTodoText = "";
    };

    $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
    };

    $scope.clearCompleted = function(){
        $scope.todos = _.filter($scope.todos, function(todo){
           return !todo.done;
        });
    };
}
