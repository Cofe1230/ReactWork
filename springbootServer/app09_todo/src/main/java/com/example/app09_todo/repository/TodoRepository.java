package com.example.app09_todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.app09_todo.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
