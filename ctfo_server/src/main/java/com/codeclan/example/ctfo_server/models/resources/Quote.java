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

    @Column(name = "quote_url")
    private String quoteUrl;

    @JsonIgnoreProperties("quotes")
    @ManyToOne
    @JoinColumn(name = "mood_id", nullable = false)
    private Mood mood;

    public Quote(String quoteUrl, Mood mood) {
        this.quoteUrl = quoteUrl;
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

    public String getQuoteUrl() {
        return quoteUrl;
    }

    public void setQuoteUrl(String quoteUrl) {
        this.quoteUrl = quoteUrl;
    }

    public Mood getMood() {
        return mood;
    }

    public void setMood(Mood mood) {
        this.mood = mood;
    }
}
