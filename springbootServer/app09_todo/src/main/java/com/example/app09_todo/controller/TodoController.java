package com.example.app09_todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app09_todo.model.Todo;
import com.example.app09_todo.service.TodoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo/*")
public class TodoController {
	private final TodoService service;
	
	@GetMapping("/list")
	public List<Todo> findAll(){
		return service.findAll();
	}
	
	@PostMapping("/insert")
	public Todo save(@RequestBody Todo todo) {
		return service.save(todo);
	}
	@DeleteMapping("/delete/{num}")
	public void deleteByNum(@PathVariable long num) {
		service.deleteByNum(num);
	}

}
