import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getAllTodos() {
    return this.http.get<Todo[]>('http://localhost:8080/todos');
  }

  deleteTodoById(id) {
    return this.http.delete(`http://localhost:8080/todos/${id}`);
  }

  getTodoById(id) {
    return this.http.get<Todo>(`http://localhost:8080/todos/${id}`);
  }

  updateTodo(id, todo) {
    return this.http.put(`http://localhost:8080/todos/${id}`, todo);
  }

  addTodo(todo) {
    return this.http.post(`http://localhost:8080/todos`, todo);
  }
}
