package todo.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sendgrid.Content;
import com.sendgrid.Email;
import com.sendgrid.Mail;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;

import todo.model.Todo;
import todo.utility.Key;

@Service
public class EmailNotificationService {
	
	private LocalDate today;
	private  String sendgridKey; 
	private String adminEmail;
	private String userEmail;
	
	@Autowired
	private TodoService todoService;
	
	@Autowired
	private Key key;
	
	public EmailNotificationService() {
		this.today = LocalDate.now();
	}
	
	
	public void sendEmail(Todo todo) throws IOException {
		this.sendgridKey = key.getSendgridApiKey();
		this.adminEmail = key.getAdminEmail();
		// deconstruct object into email fields
		// String userEmail = todo.getUserEmail();
		// set mail for testing
		this.userEmail = key.getUserEmailTest();
		LocalDate dueDate = todo.getDueDate();
		String message = todo.getText() + "\n";
		
		Email from = new Email(adminEmail);
		String subject = "Overdue Todo";
		Email to = new Email(userEmail);
		Content content = new Content("text/plain",message +  " Above Todo was due to be completed\n" + dueDate);
		Mail mail = new Mail(from, subject, to, content);

		SendGrid sg = new SendGrid(sendgridKey);
		Request request = new Request();
		try {
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			Response response = sg.api(request);
			System.out.println(response.getStatusCode());
			System.out.println(response.getBody());
			System.out.println(response.getHeaders());
			todo.setEmailSent(true);
			todoService.updateTodo(todo.getId(), todo);
			System.out.println("SENT");
		} catch (IOException ex) {
			System.out.println("IOException Request - TM-SERVICE");
			throw ex;
		}
	}
	
	public boolean checkDates(LocalDate date01, LocalDate date02) {
		if(date01.isBefore(date02)) {
			return true;
		}
		return false;
	}
	
	public List<Todo> getOverdueMessages(Iterable<Todo> messages) {
		List<Todo> overDueMessages = new ArrayList<>();
		for(Todo tm : messages) {
			// check date overdue and email not already sent
			if(checkDates(tm.getDueDate(), this.today) && tm.isEmailSent() == false) {
				overDueMessages.add(tm);
				System.out.println(tm.getText());
			}
		}
		if(overDueMessages.size() <= 0) {
			System.out.println("NO OVERDUE TODOS");
		}
		return overDueMessages;
	}
	
	public void sendNotifications(List<Todo> overdues) {
		if(overdues.size() > 0) {
			overdues.forEach(todo -> {
				try {
					sendEmail(todo);
				} catch (IOException e) {
					System.out.println("IOException - sendNotifications");
					e.printStackTrace();
				}
			});
		}
	}
}
