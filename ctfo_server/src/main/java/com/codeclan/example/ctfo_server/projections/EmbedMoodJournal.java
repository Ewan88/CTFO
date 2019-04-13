package com.codeclan.example.ctfo_server.projections;

import com.codeclan.example.ctfo_server.models.MoodJournal;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Date;

@Projection(name = "embedMoodJournal", types = MoodJournal.class)
public interface EmbedMoodJournal {
    Long getId();
    Date getDate();
    String comment();
    String endMood();
}
