package com.codeclan.example.ctfo_server.projections;

import com.codeclan.example.ctfo_server.models.MoodJournal;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Date;

@Projection(name = "embedMoodJournals", types = MoodJournal.class)
public interface EmbedMoodJournals {
    long getId();
    Date getDate();
    String getComment();
    String getEndMood();
}
