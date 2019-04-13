package com.codeclan.example.ctfo_server.projections.resources;

import com.codeclan.example.ctfo_server.models.Mood;
import com.codeclan.example.ctfo_server.models.resources.Image;
import com.codeclan.example.ctfo_server.models.resources.Quote;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedQuote", types = Quote.class)
public interface EmbedQuote {
    Long getId();
    String getUrl();
    Mood getMood();
}
