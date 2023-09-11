package com.example.app08_sboard_my.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.app08_sboard_my.dto.Board;

@Mapper
public interface BoardMapper {
	
	@Insert("insert into board(title,content) values(#{title},#{content})")
	public void insert(Board board);
	
	@Select("select * from board")
	public List<Board> findAll();
	
	@Delete("delete from board where num=#{num}")
	public void deleteById(long num);
}
