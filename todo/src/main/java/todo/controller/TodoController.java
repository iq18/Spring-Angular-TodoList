package todo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("/todos/{id}")
	public Optional<Todo> findTodo(@PathVariable Long id) {
		return todoService.findTodo(id);
	}
	
	@PostMapping("/todos")
	public Todo addTodo(@RequestBody Todo todo ) {
		return todoService.save(todo);
	}
	
	@DeleteMapping("/todos/{id}") 
	public void deleteToDo(@PathVariable Long id) {
		todoService.deleteTodoById(id);
	}
	
	@PutMapping("/todos/{id}")
	public Todo updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
		return todoService.updateTodo(id, todo);
	}
	
	

}
