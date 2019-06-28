package todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import todo.model.Todo;
import todo.service.TodoService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/todos")
	public Iterable<Todo> getAllTodos() {
		return todoService.getAllTodos();
	}
	
	@DeleteMapping("/todos/{id}") 
	public void deleteToDo(@PathVariable Long id) {
		todoService.deleteTodoById(id);
	}

}
