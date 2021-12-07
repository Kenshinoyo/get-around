package ga.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ga.model.BlogEntry;
import ga.repository.BlogRepository;
import ga.exceptions.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/gtaapi/")
public class BlogController {
	
	@Autowired
	private BlogRepository blogRepo;
    


	//get all blog entries
	
	@GetMapping("/allblogs")
	public List<BlogEntry> getAllBlogs()
	{
		
		return blogRepo.findAll();
	}
	

	@PostMapping("/addblog")
    public BlogEntry newBlogEntry(@RequestBody BlogEntry s)
    {	
		System.out.println(s);
		return blogRepo.save(s);
    }
	
	
	@GetMapping("/blogs/{id}")
	public ResponseEntity<BlogEntry> getBlogById(@PathVariable int id)
	{
		BlogEntry s = blogRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Entry not found"));
		return ResponseEntity.ok(s);                 
	}
	
	@GetMapping("/blogs/{userName}")
	public List<BlogEntry> getBlogByUserName(@PathVariable String userName)
	{	
		List <BlogEntry> blogs=blogRepo.findByUserName(userName);
		if(blogs.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("There are no entries from that user."));
		}
		
		return blogRepo.findByUserName(userName);
	}
	
	@PutMapping("/blogs/{id}")
	public ResponseEntity<BlogEntry> updateBlogEntry(@PathVariable int id, @RequestBody BlogEntry blogEntry)
	{
		BlogEntry s= blogRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Entry not found"));
	    s.setUserName(blogEntry.getUserName());
	    s.setBody(blogEntry.getBody());
	    BlogEntry updatedBlogEntry = blogRepo.save(s);
	    return ResponseEntity.ok(updatedBlogEntry);
	}
	
	@DeleteMapping("/blogs/{id}")
	public String deleteBlogEntry(@PathVariable int id)
	{
		blogRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Entry not found"));
	    blogRepo.deleteById(id);
	    return "Entry is removed from the database.";
	}
	
}
