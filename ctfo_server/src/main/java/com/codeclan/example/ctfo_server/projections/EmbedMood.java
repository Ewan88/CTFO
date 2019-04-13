package com.codeclan.example.ctfo_server.projections;

import com.codeclan.example.ctfo_server.models.Mood;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedMood", types = Mood.class)
public interface EmbedMood {
    Long getId();
    List<String> getQuotes();
    List<String> getImages();
    List<String> getVideos();
}
