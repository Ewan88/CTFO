package com.codeclan.example.ctfo_server.repository;

import com.codeclan.example.ctfo_server.models.moods.Mood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoodRepository extends JpaRepository<Mood, Long> {
}
