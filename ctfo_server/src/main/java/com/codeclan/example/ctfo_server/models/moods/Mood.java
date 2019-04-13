package com.codeclan.example.ctfo_server.models.moods;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorColumn(name = "mood_type")
public abstract class Mood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quotes")
    private List<String> quotes;

    @Column(name = "images")
    private List<String> images;

    @Column(name = "videos")
    private List<String> videos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
