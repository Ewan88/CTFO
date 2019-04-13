package com.codeclan.example.ctfo_server.models.resources;

import com.codeclan.example.ctfo_server.models.Mood;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image_url")
    private String imageUrl;

    @JsonIgnoreProperties("images")
    @ManyToOne
    @JoinColumn(name = "mood_id", nullable = false)
    private Mood mood;
}
