package com.example.app10_movie_bs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.app10_movie_bs.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
