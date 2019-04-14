package com.codeclan.example.ctfo_server.models.resources;

import com.codeclan.example.ctfo_server.models.Mood;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "quotes")
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quote")
    private String quote;

    @Column(name = "author")
    private String author;

    @JsonIgnoreProperties("quotes")
    @ManyToOne
    @JoinColumn(name = "mood_id", nullable = false)
    private Mood mood;

    public Quote(String quote, String author, Mood mood) {
        this.quote = quote;
        this.author = author;
        this.mood = mood;
    }

    public Quote() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Mood getMood() {
        return mood;
    }

    public void setMood(Mood mood) {
        this.mood = mood;
    }
}
