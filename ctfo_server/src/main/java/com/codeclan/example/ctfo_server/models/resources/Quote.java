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
}
