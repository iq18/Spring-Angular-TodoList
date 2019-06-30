import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  deleteMessage: string;

  constructor(private todoDataService: TodoDataService, private router: Router ) { }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoDataService.getAllTodos().subscribe(
      response => {
        this.todos = response;
        console.log(response);
        this.todos.forEach(element => {
          element.done = element.complete ? 'True' : 'False';
        });
      }
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodoById(id)
    .subscribe(
      response => {
        console.log('Response: ', response);
        this.getAllTodos();
        this.deleteMessage = 'Delete successful';
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['addtodos']);
  }

  markAsDone(todo) {
    if (todo.complete === false) {
      todo.complete = true;
      todo.done = 'True';
    } else {
      todo.complete = false;
      todo.done = 'False';
    }
    this.todoDataService.updateTodo(todo.id, todo)
    .subscribe ();
    this.router.navigate(['todos']);
  }

  getDueDateBadge(todo: Todo) {
    //   toggle color class for badge
    return todo.complete ? 'badge-success' : 'badge-primary';
  }



}
