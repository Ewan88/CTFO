package com.codeclan.example.ctfo_server.repository.resources;

import com.codeclan.example.ctfo_server.models.resources.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
}
