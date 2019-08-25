package todo.utility;

/*
 * Example class to show structure of Key class containing
 * API keys and other sensitive information.
 */

public class KeyExample {
	
	private String sendgridApiKey;
	private String adminEmail;
	private String userEmailTest;
	
	public KeyExample() {
		this.sendgridApiKey = "";
		this.adminEmail = "";
		this.userEmailTest = "";
	}

	public String getSendgridApiKey() {
		return sendgridApiKey;
	}

	public void setSendgridApiKey(String sendgridApiKey) {
		this.sendgridApiKey = sendgridApiKey;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getUserEmailTest() {
		return userEmailTest;
	}

	public void setUserEmailTest(String userEmailTest) {
		this.userEmailTest = userEmailTest;
	}
}
