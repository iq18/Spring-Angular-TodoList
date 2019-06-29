import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo: Todo;
  text: string;
  dueDate: Date;
  constructor(private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit() {
  }

  saveTodo() {
    this.todo = new Todo(this.text, this.dueDate);
    this.todoDataService.addTodo(this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
  }

}
