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
	private String text;
	
	private boolean complete;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate dueDate;
	
//  TODO add User
//	@NotEmpty
//	private String username;
	
	private String userEmail;
	
	private boolean emailSent;
	
	//TODO allow user specify number of days to complete todo
	// add amount to date in constructor to set individual dates
	
	public Todo() {
	}
	
	public Todo(@NotEmpty String text, LocalDate dueDate) {
		this.text = text;
		this.complete = false;
		this.dueDate = dueDate;
	}
	
	
	public Todo(Long id, @NotEmpty String text, LocalDate dueDate) {
		this.id = id;
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

	public LocalDate getDueDate() {
		return dueDate;
	}

	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}
	
	
	
	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	
	public boolean isEmailSent() {
		return emailSent;
	}

	public void setEmailSent(boolean emailSent) {
		this.emailSent = emailSent;
	}

	@Override
	public String toString() {
		return "Id: " + id + " Text: " + text + " Complete: " + complete + " Date: " + dueDate;
	}
	
	
	
	
	
	
}
