package com.codeclan.example.ctfo_server.controller;

import com.codeclan.example.ctfo_server.repository.MoodRepository;
import com.codeclan.example.ctfo_server.repository.resources.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mood")
public class MoodController {

    @Autowired
    MoodRepository moodRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    QuoteRepository quoteRepository;

    @Autowired
    VideoRepository videoRepository;

}
