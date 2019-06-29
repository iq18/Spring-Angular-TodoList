import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from 'src/app/todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.todo = new Todo('blank', new Date());

    if (this.id !== -1) {
      this.todoDataService.getTodoById(this.id)
      .subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo(id) {
    this.todoDataService.updateTodo(this.id, this.todo)
    .subscribe (
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      }
    );
  }

}
