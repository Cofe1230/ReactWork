package com.example.todo_test.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Builder
public class TodoDto {
	private long id;
	private String title;
	private String content;
}
