package com.codeclan.example.ctfo_server.projections;

import com.codeclan.example.ctfo_server.models.Mood;
import com.codeclan.example.ctfo_server.models.resources.Image;
import com.codeclan.example.ctfo_server.models.resources.Quote;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedQuotes", types = Quote.class)
public interface EmbedQuotes {
    long getId();
    String getQuote();
    String getAuthor();
    List<Quote> getQuotes();
}
