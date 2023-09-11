package com.example.app08_sboard_my.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.app08_sboard_my.dto.Board;
import com.example.app08_sboard_my.mapper.BoardMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
	private final BoardMapper boardMapper;
	//추가
	public void insert(Board board) {
		boardMapper.insert(board);
	}
	//전체보기
	public List<Board> findAll(){
		return boardMapper.findAll();
	}
	//삭제
	public void deleteById(long num) {
		boardMapper.deleteById(num);
	}
}
