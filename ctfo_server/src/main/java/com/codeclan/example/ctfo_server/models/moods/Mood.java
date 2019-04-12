package com.codeclan.example.ctfo_server.models.moods;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import java.util.List;

@Entity
@DiscriminatorColumn(name = "mood_type")
public abstract class Mood {

    @Column(name = "quotes")
    private List<String> quotes;

    @Column(name = "images")
    private List<String> images;


    @Column(name = "videos")
    private List<String> videos;






}
