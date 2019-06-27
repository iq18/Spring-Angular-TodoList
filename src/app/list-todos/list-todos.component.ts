import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../services/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  // todos = [
  //   new Todo(1, 'Learn Spring Boot', false, new Date()),
  //   new Todo(2, 'Add MariaDB to project', false, new Date()),
  //   new Todo(3, 'Use Angular CLI', false, new Date())
  // ];

  constructor(private todoDataService: TodoDataService ) { }

  ngOnInit() {
    this.todoDataService.getAllTodos().subscribe(
      response => {
        this.todos = response;
        console.log(response);
        this.todos.forEach(element => {
          element.done = 'False';
        });
      }
    );
  }



}
