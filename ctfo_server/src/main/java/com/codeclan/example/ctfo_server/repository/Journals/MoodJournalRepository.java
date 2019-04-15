package com.codeclan.example.ctfo_server.repository.Journals;

import com.codeclan.example.ctfo_server.models.Journal;
import com.codeclan.example.ctfo_server.projections.EmbedMoodJournals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedMoodJournals.class)
public interface MoodJournalRepository extends JpaRepository<Journal, Long>, MoodJournalRepositoryCustom {
}
