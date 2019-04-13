package com.codeclan.example.ctfo_server.components;

import com.codeclan.example.ctfo_server.models.*;
import com.codeclan.example.ctfo_server.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MoodRepository moodRepository;

    @Autowired
    MoodJournalRepository moodJournalRepository;

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Mood depressed = new Mood("Depressed");
        moodRepository.save(depressed);

        Mood ecstatic = new Mood("Ecstatic");
        moodRepository.save(ecstatic);

        Mood happy = new Mood("Happy");
        moodRepository.save(happy);

        Mood neutral = new Mood("Neutral");
        moodRepository.save(neutral);

        Mood sad = new Mood("Sad");
        moodRepository.save(sad);


    }
}
