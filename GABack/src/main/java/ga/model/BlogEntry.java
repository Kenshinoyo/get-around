package ga.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


// -This is the parent table

@Entity
@Table(name="blogs")

// "Computers" table for desktop PCs only

public class BlogEntry {
	@Id
	private int id; // Unique identifier for blog entries
	private String userName;
	private String body;
	
	public BlogEntry()
	{
		
	}
	
	public BlogEntry(int id, String userName, String body) {
		super();
		this.id = id;
		this.userName = userName;
		this.body = body;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

}
