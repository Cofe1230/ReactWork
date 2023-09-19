package com.example.book_blog.controller;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.example.book_blog.entity.Post;
import com.example.book_blog.service.PostService;
import com.example.book_blog.service.PostServiceImpl;

@WebMvcTest(PostController.class)
public class PostControllerTest {
	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	PostService postService;
	
	@Test
	void getListTest() throws Exception {
		
		List<Post> list= new ArrayList<>();
		list.add(Post.builder().id(1).title("test01").content("test01").build());
		list.add(Post.builder().id(2).title("test02").content("test02").build());
		given(postService.findAll()).willReturn(list); 
		mockMvc.perform(get("/postList"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].id").exists())
				.andExpect(jsonPath("$[0].content").exists())
				.andExpect(jsonPath("$[0].title").exists())
				.andDo(print());
		verify(postService.findAll());
	}
}
