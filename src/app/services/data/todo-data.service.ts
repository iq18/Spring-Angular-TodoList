import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todo';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getAllTodos() {
    return this.http.get<Todo[]>(`${API_URL}/todos`);
  }

  deleteTodoById(id) {
    return this.http.delete(`${API_URL}/todos/${id}`);
  }

  getTodoById(id) {
    return this.http.get<Todo>(`${API_URL}/todos/${id}`);
  }

  updateTodo(id, todo) {
    return this.http.put(`${API_URL}/todos/${id}`, todo);
  }

  addTodo(todo) {
    return this.http.post(`${API_URL}/todos`, todo);
  }
}
