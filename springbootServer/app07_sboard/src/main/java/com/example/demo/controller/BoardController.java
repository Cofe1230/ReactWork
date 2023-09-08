package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Board;
import com.example.demo.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BoardController {
	private final BoardService boardService;
	
	@GetMapping("/home")
	public String home() {
		System.out.println("home");
		return "success";
	}
	
	@PostMapping("/api/insert")
	public void insert(@RequestBody Board board) {
		System.out.println(board.getTitle());
		System.out.println(board.getContent());
		boardService.insert(board);
	}
	
	@GetMapping("api/list")
	public List<Board> list(){
		return boardService.findAll();
	}
	@DeleteMapping("api/delete/{num}")
	public void delete(@PathVariable int num) {
		boardService.delete(num);
	}
}
