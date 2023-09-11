package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Board;
import com.example.demo.repository.BoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
	private final BoardRepository boardRepository;
	
	//추가
	public Board insert(Board board) {
		return boardRepository.save(board);
	}
	public List<Board> findAll(){
		return boardRepository.findAll();
	}
	public void delete(long num) {
		boardRepository.deleteById(num);
	}
}
