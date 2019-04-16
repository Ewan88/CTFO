package com.codeclan.example.ctfo_server.controllers;

import com.codeclan.example.ctfo_server.repository.Journals.MoodJournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/journals")
public class JournalController {

    @Autowired
    MoodJournalRepository moodJournalRepository;

}
