package com.codeclan.example.ctfo_server.repository.resources;

import com.codeclan.example.ctfo_server.models.resources.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}
