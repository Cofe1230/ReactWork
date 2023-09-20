package com.example.book_blog.repository;


import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.mockito.BDDMockito.Then;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.example.book_blog.entity.Comment;
import com.example.book_blog.entity.Post;
import com.example.book_blog.service.PostService;

import static org.mockito.BDDMockito.then;


@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class PostRepositoryTest {
	
	@Autowired
	private PostRepository postRepository;
	
	@Test
	@Disabled
	void findall() {
		List<Post> posts = postRepository.findAll();
		
		then(!posts.isEmpty());
	}
	@Test
	@DisplayName("findbyid테스트")
	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	void findById() {
		long postNum = 1;
		Post post = postRepository.findById(postNum).get();
		List<Comment> comments = post.getComments();
		then(postNum==post.getId());
		then(!comments.isEmpty());
		System.out.println(post.getTitle());
		for(Comment comment : comments) {
			System.out.println(comment.getContent());
		}
	}

}
