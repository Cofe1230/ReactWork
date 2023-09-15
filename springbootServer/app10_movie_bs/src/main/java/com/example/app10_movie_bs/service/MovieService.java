package com.example.app10_movie_bs.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.app10_movie_bs.model.Movie;
import com.example.app10_movie_bs.repository.MovieRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MovieService {
	private final MovieRepository movieRepository;
	
	public List<Movie> findAll(){
		System.out.println("들어옴");
		return movieRepository.findAll();
	}
	
}
