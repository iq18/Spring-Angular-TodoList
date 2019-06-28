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
  deleteMessage: string;

  constructor(private todoDataService: TodoDataService ) { }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
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



}
