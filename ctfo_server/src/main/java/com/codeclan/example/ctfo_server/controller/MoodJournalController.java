package com.codeclan.example.ctfo_server.controller;

import com.codeclan.example.ctfo_server.repository.MoodJournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/journal")
public class MoodJournalController {

    @Autowired
    MoodJournalRepository moodJournalRepository;

}
