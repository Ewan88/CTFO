package com.codeclan.example.ctfo_server.projections;

import com.codeclan.example.ctfo_server.models.Journal;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Date;

@Projection(name = "embedMoodJournals", types = Journal.class)
public interface EmbedMoodJournals {
    long getId();
    Date getDate();
    String getComment();
    String getEndMood();
}
