package com.example.app09_todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.app09_todo.model.Todo;
import com.example.app09_todo.repository.TodoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {
	private final TodoRepository repository;
	
	public List<Todo> findAll(){
		return repository.findAll();
	}
	
	public Todo save(Todo todo) {
		return repository.save(todo);
	}
	public void deleteByNum(long num) {
		repository.deleteById(num);
	}

}
