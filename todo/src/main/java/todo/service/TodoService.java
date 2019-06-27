package todo.service;

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

}
