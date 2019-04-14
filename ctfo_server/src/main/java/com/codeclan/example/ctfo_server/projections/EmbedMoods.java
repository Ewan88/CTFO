package com.codeclan.example.ctfo_server.projections;

import com.codeclan.example.ctfo_server.models.Mood;
import com.codeclan.example.ctfo_server.models.resources.*;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedMoods", types = Mood.class)
public interface EmbedMoods {
    long getId();
    List<Quote> getQuotes();
    List<Image> getImages();
    List<Video> getVideos();
}
