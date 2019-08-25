package todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import todo.model.Todo;
import todo.service.EmailNotificationService;
import todo.service.TodoService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EmailNotificationController {
	
	@Autowired
	private EmailNotificationService emailNotificationService;
	
	@Autowired
	private TodoService todoService;
	
	@PostMapping("/overdue")
	public void checkForOverdues() {
		System.out.println("IN CONTROLLER");
		Iterable<Todo> allTodos = todoService.getAllTodos();
		List<Todo> overDueTodos = emailNotificationService.getOverdueMessages(allTodos);
		emailNotificationService.sendNotifications(overDueTodos);
		
	}
	

}
