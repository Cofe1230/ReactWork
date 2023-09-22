package com.example.todo_test.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.todo_test.entity.TodoEntity;
import com.example.todo_test.repository.TodoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {
	private final TodoRepository todoRepository;
	
	public List<TodoEntity> findAllTodo(){
		return todoRepository.findAll();
	}
	
	public void saveTodo(TodoEntity todoEntity) {
		todoRepository.save(todoEntity);
	}
}
