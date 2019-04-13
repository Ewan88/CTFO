package com.codeclan.example.ctfo_server.repository;

import com.codeclan.example.ctfo_server.models.journal.MoodJournal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoodJournalRepository extends JpaRepository<MoodJournal, Long> {
}
