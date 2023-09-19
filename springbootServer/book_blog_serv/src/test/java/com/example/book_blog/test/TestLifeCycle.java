package com.example.book_blog.test;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class TestLifeCycle {
	
	@BeforeAll
	static public void beforeAll() {
		System.out.println("##BeforeAll Annotation 시작");
		System.out.println();
	}
	
	@AfterAll
	static public void afterAll() {
		System.out.println("##AfterAll Annotation 시작");
		System.out.println();
	}
	
	@BeforeEach
	public void beforeEach() {
		System.out.println("##BeforeEach Annotation 시작");
		System.out.println();
	}
	
	@AfterEach
	public void afterEach() {
		System.out.println("##AfterEach Annotation 시작");
		System.out.println();
	}
	
	@Test
	void test1()throws Exception {
		
		
		System.out.println("## test1 시작 ##");
		System.out.println();
	}
	
	@Test
	@DisplayName("테스트 2")
	public void test2() {
		System.out.println("## test2 시작##");
		System.out.println();
	}
	
	@Test
	@Disabled
	public void test3() {
		System.out.println("##test3 시작##");
		System.out.println();
	}

}
