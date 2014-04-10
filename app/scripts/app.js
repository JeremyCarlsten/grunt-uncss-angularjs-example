'use strict';

angular.module('jeremycarlsten.GruntUncssAngularExample', ['ngAnimate', 'ngRoute', 'mgcrea.ngStrap']);

function TodoCtrl($scope) {
    $scope.todos = [
        {text: "Learn AngularJs", done: false},
        {text: "Build An App", done: false}
    ];

    $scope.getTotalTodos = function(){
       return $scope.todos.length;
    }

    $scope.addTodo = function () {
        var formText = $scope.formTodoText;
        if (formText != undefined && formText.trim() != "") {
            $scope.todos.push({ text: formText, done: false });
        }
        $scope.formTodoText = "";
    }

    $scope.clearCompleted = function(){
        $scope.todos = _.filter($scope.todos, function(todo){
           return !todo.done;
        });
    }
}
