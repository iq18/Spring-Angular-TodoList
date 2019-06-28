package todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import todo.model.HelloWorldBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	
	@GetMapping("/helloworld")
	public String HelloWorld() {
		return "Hello World";
	}
	
	@GetMapping("/helloworld-bean")
	public HelloWorldBean HelloWorldBean() {
		return new HelloWorldBean("Hello World - Changed");
	}
	
	@GetMapping("/helloworld-bean/{name}")
	public HelloWorldBean HelloWorldPathVar(@PathVariable String name) {
		return new HelloWorldBean("Hello, " + name + " from Server");
	}

}
