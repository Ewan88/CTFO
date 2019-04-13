package com.codeclan.example.ctfo_server.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "moods")
public class Mood implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "quotes")
    private List<String> quotes;

    @Column(name = "images")
    private List<String> images;

    @Column(name = "videos")
    private List<String> videos;

    public Mood(String name) {
        this.name = name;
        this.quotes = new ArrayList<>();
        this.images = new ArrayList<>();
        this.videos = new ArrayList<>();
    }

    public Mood() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getQuotes() {
        return quotes;
    }

    public void setQuotes(List<String> quotes) {
        this.quotes = quotes;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<String> getVideos() {
        return videos;
    }

    public void setVideos(List<String> videos) {
        this.videos = videos;
    }

    public void addQuote(String quote) {
        this.quotes.add(quote);
    }

    public void addImage(String image) {
        this.images.add(image);
    }

    public void addVideo(String video) {
        this.videos.add(video);
    }

}

