package todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import todo.model.AuthenticationBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AuthenticationController {
	
	@GetMapping("/basicauth")
	public AuthenticationBean HelloWorldBean() {
		return new AuthenticationBean("User authenticated");
	}

}
