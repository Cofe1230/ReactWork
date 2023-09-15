package com.example.app10_movie_bs.model;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Movie {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long movieIdx;
	private int year;
	private String title;
	private String summary;
	private String medium_cover_image;
	@ElementCollection
	@CollectionTable(joinColumns = @JoinColumn(name = "movieIdx"))
	@Column(name = "genres")
	private List<String> genres;
	
	@Builder
	public Movie(long movieIdx,int year, String title, String summary, String medium_cover_image, List<String> genres) {
		this.movieIdx = movieIdx;
		this.year = year;
		this.title = title;
		this.summary = summary;
		this.medium_cover_image = medium_cover_image;
		this.genres = genres;
	}
	
}


