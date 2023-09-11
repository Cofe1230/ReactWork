package com.example.app08_sboard_my.comtroller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.app08_sboard_my.dto.Board;
import com.example.app08_sboard_my.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BoardController {
	private final BoardService boardService;
	
	@PostMapping("/api/insert")
	public Board insert(@RequestBody Board board) {
		boardService.insert(board);
		return board;
	}
	@GetMapping("api/list")
	public List<Board> findAll(){
		return boardService.findAll();
	}
	@DeleteMapping("api/delete/{num}")
	public void delete(@PathVariable long num) {
		boardService.deleteById(num);
	}
}
