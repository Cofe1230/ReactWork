package com.example.book_blog.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.book_blog.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
	@Query("select distinct p from Post p left join fetch p.comments")
	List<Post> findAll();
	
	@Query("select distinct p from Post p left join fetch p.comments where p.id=:post_id")
	Optional<Post> findById(long post_id);
}
