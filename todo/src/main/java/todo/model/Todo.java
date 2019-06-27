package todo.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotEmpty
	private String username;
	
	@NotEmpty
	private String text;
	
	private boolean complete;
	
	@JsonFormat(pattern="MM/dd/yyyy")
	private LocalDate dueDate;
	
	//TODO allow user specify number of days to complete todo
	// add amount to date in constructor to set individual dates
	
	public Todo() {
	}

	public Todo(@NotEmpty String username, @NotEmpty String text, LocalDate dueDate) {
		this.username = username;
		this.text = text;
		this.complete = false;
		this.dueDate = dueDate;
	}
	
	
	public Todo(Long id, @NotEmpty String username, @NotEmpty String text, LocalDate dueDate) {
		this.id = id;
		this.username = username;
		this.text = text;
		this.complete = false;
		this.dueDate = dueDate;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isComplete() {
		return complete;
	}

	public void setComplete(boolean complete) {
		this.complete = complete;
	}

	public LocalDate getDuedate() {
		return dueDate;
	}

	public void setDuedate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}
	
	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Id: " + id + " Text: " + text + " Complete: " + complete + " Date: " + dueDate;
	}
	
	
	
	
	
	
}
