package com.example.book_blog.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.book_blog.dto.CommentDTO;
import com.example.book_blog.entity.Comment;
import com.example.book_blog.entity.Post;
import com.example.book_blog.repository.CommentRepository;
import com.example.book_blog.repository.PostRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService{
	private final PostRepository postRepository;
	
	public Post save(Post post) {
		return postRepository.save(post);
	}
	
	public List<Post> findAll() {
		return postRepository.findAll();
	}
	public Post findById(long num) {
		return postRepository.findById(num).get();
	}
	@Transactional
	public void insertCmt(CommentDTO commentDTO) {
		long post_id = commentDTO.getPostid();
		Post post = postRepository.findById(post_id).get();
		Comment comment = commentDTO.toEntity(post);
		post.addComment(comment);
	}
	
}
