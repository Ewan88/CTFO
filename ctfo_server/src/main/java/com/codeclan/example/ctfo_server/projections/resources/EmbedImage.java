package com.codeclan.example.ctfo_server.projections.resources;

import com.codeclan.example.ctfo_server.models.Mood;
import com.codeclan.example.ctfo_server.models.resources.Image;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedImage", types = Image.class)
public interface EmbedImage {
    Long getId();
    String getUrl();
    Mood getMood();
}
