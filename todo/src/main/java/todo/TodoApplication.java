package todo;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import todo.model.Todo;
import todo.service.TodoService;

@SpringBootApplication
public class TodoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}
	
	@Autowired
//	private TodoService todoService;
	
	
	
	@Bean
	CommandLineRunner runner(TodoService todoService) {
		
		
		return args -> {
			todoService.save(new Todo(1L,"Cut the grass", LocalDate.now().plus(7, ChronoUnit.DAYS)));
			todoService.save(new Todo(2L,"Paint the bathroom", LocalDate.now().plus(7, ChronoUnit.DAYS)));
			todoService.save(new Todo(3L,"Buy new curtains",LocalDate.now().plus(7, ChronoUnit.DAYS)));
			todoService.save(new Todo(4L, "Run a marathon",LocalDate.now().plus(7, ChronoUnit.DAYS)));
			todoService.save(new Todo(5L,"Learn React",LocalDate.now().plus(7, ChronoUnit.DAYS)));
//			todoService.save(new Todo(6L, "admin", "Persist todos to MySQL database",LocalDate.now().plus(7, ChronoUnit.DAYS)));
		};
	}

}
