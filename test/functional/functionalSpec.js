describe("ToDoControllerTest", function() {

    beforeEach(module('GruntUncssAngularExample'));

    var todoCtrl;

    beforeEach(inject(function($controller){
        todoCtrl = $controller('TodoCtrl');
    }));
    describe("getTotalTodos", function() {

        it("should get total Todos", function () {
            todoCtrl.todos = [
                {text: "Task 1", done: false},
                {text: "Task 2", done: false},
                {text: "Task 3", done: false},
                {text: "Task 4", done: false},
                {text: "Task 5", done: true}
            ];

            expect(todoCtrl.getTotalTodos()).toEqual(5);
        });

        it("should handle empty list", function () {
            todoCtrl.todos = [];
            expect(todoCtrl.getTotalTodos()).toEqual(0);
        });

    });

    describe("hasTasksLeft", function() {
        it("should return if true tasks remain", function () {
            todoCtrl.todos = [
                {text: "Task 1", done: false},
                {text: "Task 2", done: true}
            ];
            expect(todoCtrl.hasTasksLeft()).toEqual(true);
        });

        it("should return if false tasks are empty", function () {
            todoCtrl.todos = [];
            expect(todoCtrl.hasTasksLeft()).toEqual(false);
        });
    });

    describe("addTodo", function() {
        it("should add a todo to the list", function () {
            todoCtrl.todos = [
                {text: "Task 1", done: false}
            ];

            todoCtrl.formTodoText = "Task 2";
            todoCtrl.addTodo();

          var expectedTodo = [
              {text: "Task 1", done: false},
              {text: "Task 2", done: false}
          ];

            expect(todoCtrl.todos).toEqual(expectedTodo);
        });
    });

    describe("removeTodo", function() {
        it("should remove a todo from the list", function () {
            todoCtrl.todos = [
                {text: "Task 1", done: false}
            ];

            todoCtrl.removeTodo(0);

            expect(todoCtrl.todos).toEqual([]);
        });
    });

    describe("clearCompleted", function() {
        it("should remove a todo from the list", function () {
            todoCtrl.todos = [
                {text: "Task 1", done: false},
                {text: "Task 2", done: true},
                {text: "Task 3", done: false},
                {text: "Task 4", done: true},
                {text: "Task 5", done: true}
            ];

            todoCtrl.clearCompleted();

            var expectedTodos = [
                {text: "Task 1", done: false},
                {text: "Task 3", done: false}
            ];
            expect(todoCtrl.todos).toEqual(expectedTodos);
        });

        it("should not remove if no tasks are complete", function () {
            var todos = [
                {text: "Task 1", done: false},
                {text: "Task 2", done: false},
                {text: "Task 3", done: false},
                {text: "Task 4", done: false},
                {text: "Task 5", done: false}
            ];

            todoCtrl.todos = todos;

            todoCtrl.clearCompleted();

            expect(todoCtrl.todos).toEqual(todos);
        });
    });
});