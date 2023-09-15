package com.example.app10_movie_bs.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Builder
@AllArgsConstructor
public class MovieDTO {
	private int year;
	private String title;
	private String summary;
	private String medium_cover_image;
	private List<String> genres;
	
	public Movie toEntity() {
		return Movie.builder()
				.year(year)
				.title(title)
				.summary(summary)
				.medium_cover_image(medium_cover_image)
				.genres(genres)
				.build();
	}
}
