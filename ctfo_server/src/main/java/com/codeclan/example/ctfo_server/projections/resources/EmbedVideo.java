package com.codeclan.example.ctfo_server.projections.resources;

import com.codeclan.example.ctfo_server.models.Mood;
import com.codeclan.example.ctfo_server.models.resources.Image;
import com.codeclan.example.ctfo_server.models.resources.Video;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedVideo", types = Video.class)
public interface EmbedVideo {
    Long getId();
    String getUrl();
    Mood getMood();
}
