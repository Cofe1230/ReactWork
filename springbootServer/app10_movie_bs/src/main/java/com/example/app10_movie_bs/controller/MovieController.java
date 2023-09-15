package com.example.app10_movie_bs.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.app10_movie_bs.model.Movie;
import com.example.app10_movie_bs.model.MovieDTO;
import com.example.app10_movie_bs.service.MovieService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MovieController {
	private final MovieService movieService;
	
	@GetMapping("/movieList")
	public List<MovieDTO> movieList() {
		List<MovieDTO> movieList = new ArrayList<>();
		for(Movie movie : movieService.findAll()) {
			MovieDTO movieDTO = MovieDTO.builder()
								.movieIdx(movie.getMovieIdx())
								.title(movie.getTitle())
								.year(movie.getYear())
								.summary(movie.getSummary())
								.medium_cover_image(movie.getMedium_cover_image())
								.genres(movie.getGenres())
								.build();
			movieList.add(movieDTO);
		}
		
		return movieList;
	}
	@PostMapping("insert")
	public MovieDTO movieInsert(@RequestBody MovieDTO movieDTO) {
		Movie movie = movieService.save(movieDTO.toEntity());
		MovieDTO dto = MovieDTO.builder()
						.title(movie.getTitle())
						.year(movie.getYear())
						.summary(movie.getSummary())
						.medium_cover_image(movie.getMedium_cover_image())
						.genres(movie.getGenres())
						.build();
		return dto;
	}
	@DeleteMapping("delete/{num}")
	public void delete(@PathVariable long num) {
		movieService.deleteById(num);
	}
	
}
