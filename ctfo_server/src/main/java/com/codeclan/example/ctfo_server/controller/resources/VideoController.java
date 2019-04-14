package com.codeclan.example.ctfo_server.controller.resources;

import com.codeclan.example.ctfo_server.models.resources.Video;
import com.codeclan.example.ctfo_server.repository.resources.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/videos")
public class VideoController {

    @Autowired
    VideoRepository videoRepository;

//    @GetMapping
//    public List<Video> getAllVideos() {
//        return videoRepository.findAll();
//    }
}
