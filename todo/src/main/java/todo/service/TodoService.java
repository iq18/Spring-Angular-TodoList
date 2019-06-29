package todo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import todo.model.Todo;
import todo.repository.TodoRepository;

@Service
public class TodoService {
	
	@Autowired
	private TodoRepository todoRepository;
	
	public Iterable<Todo> getAllTodos() {
		return todoRepository.findAll();
	}
	
	public Todo save(Todo todo) {
		return todoRepository.save(todo);
	}
	
	public void deleteTodo(Todo todo) {
		todoRepository.delete(todo);
	}
	
	public void deleteTodoById(Long id) {
		todoRepository.deleteById(id);
	}
	
	public Optional<Todo> findTodo(Long id) {
		return todoRepository.findById(id);
	}
	
	public Todo updateTodo(Long id, Todo todo) {
		// Todo todo = findTodo(id).get();
		return save(todo);
	}

}
