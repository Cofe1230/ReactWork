package com.example.todo_test.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo_test.dto.TodoDto;
import com.example.todo_test.entity.TodoEntity;
import com.example.todo_test.service.TodoService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/todo/*")
@RestController
@RequiredArgsConstructor
public class TodoController {
	private final TodoService todoService;
	
	@GetMapping("/todoList")
	public List<TodoEntity> todoList(){
		return todoService.findAllTodo();
	}
	
	@PutMapping("/todoWrite")
	public void saveTodo(@RequestBody TodoEntity todoEntity) {
		todoService.saveTodo(todoEntity);	
	}
}
