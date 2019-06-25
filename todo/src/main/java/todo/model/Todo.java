package todo.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotEmpty
	private String text;
	
	private boolean complete;
	
	private LocalDate date;
	
	public Todo() {
	}

	public Todo(@NotEmpty String text, LocalDate date) {
		this.text = text;
		this.complete = false;
		this.date = date;
	}

	public Todo(Long id, @NotEmpty String text, LocalDate date) {
		this.id = id;
		this.text = text;
		this.complete = false;
		this.date = date;
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

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Id: " + id + " Text: " + text + " Complete: " + complete + " Date: " + date;
	}
	
	
	
	
	
	
}
