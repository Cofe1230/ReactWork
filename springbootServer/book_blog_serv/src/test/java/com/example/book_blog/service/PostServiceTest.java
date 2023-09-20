package com.example.book_blog.service;

import static org.mockito.BDDMockito.then;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.example.book_blog.entity.Post;
import com.example.book_blog.repository.PostRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class PostServiceTest {
	
	@Autowired
	PostService postService;
	
	@Test
	void findAll() {
		List<Post> posts = postService.findAll();
		
		then(!posts.isEmpty());
		
		for(Post post : posts) {
			System.out.println(post.getId());
			System.out.println(post.getTitle());
			System.out.println(post.getContent());
			System.out.println(post.getComments());
		}
	}
}
