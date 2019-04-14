package com.codeclan.example.ctfo_server.controller.resources;


import com.codeclan.example.ctfo_server.models.resources.Image;
import com.codeclan.example.ctfo_server.repository.resources.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    ImageRepository imageRepository;

    @GetMapping
    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }
}
