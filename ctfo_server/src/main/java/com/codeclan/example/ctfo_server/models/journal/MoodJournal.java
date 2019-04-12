package com.codeclan.example.ctfo_server.models.journal;

import com.codeclan.example.ctfo_server.models.moods.Mood;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "journal")
public class MoodJournal {

    @Column(name = "date")
    private Date date;

    @Column(name = "startMood")
    private Mood startMood;

    @Column(name = "comment")
    private String comment;

    @Column(name = "endMood")
    private String endMood;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public MoodJournal(Date date, Mood startMood, String comment, String endMood){
        this.date = date;
        this.startMood = startMood;
        this.comment = comment;
        this.endMood = endMood;
    }

    public MoodJournal(){

    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Mood getStartMood() {
        return startMood;
    }

    public void setStartMood(Mood startMood) {
        this.startMood = startMood;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getEndMood() {
        return endMood;
    }

    public void setEndMood(String endMood) {
        this.endMood = endMood;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
