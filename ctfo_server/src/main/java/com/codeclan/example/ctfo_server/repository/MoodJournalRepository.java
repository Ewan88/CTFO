package com.codeclan.example.ctfo_server.repository;

import com.codeclan.example.ctfo_server.models.MoodJournal;
import com.codeclan.example.ctfo_server.projections.EmbedMoodJournals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedMoodJournals.class)
public interface MoodJournalRepository extends JpaRepository<MoodJournal, Long> {
}
