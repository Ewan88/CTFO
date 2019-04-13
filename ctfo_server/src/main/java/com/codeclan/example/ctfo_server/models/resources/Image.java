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


    public Image(String imageUrl, Mood mood) {
        this.imageUrl = imageUrl;
        this.mood = mood;
    }

    public Image() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Mood getMood() {
        return mood;
    }

    public void setMood(Mood mood) {
        this.mood = mood;
    }
}
