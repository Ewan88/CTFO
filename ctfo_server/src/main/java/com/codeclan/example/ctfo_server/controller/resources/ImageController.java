package com.codeclan.example.ctfo_server.controller.resources;


import com.codeclan.example.ctfo_server.repository.resources.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    ImageRepository imageRepository;
}