package com.codeclan.example.ctfo_server.components;

import com.codeclan.example.ctfo_server.models.*;
import com.codeclan.example.ctfo_server.models.resources.*;
import com.codeclan.example.ctfo_server.repository.*;
import com.codeclan.example.ctfo_server.repository.resources.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MoodRepository moodRepository;

    @Autowired
    QuoteRepository quoteRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    VideoRepository videoRepository;


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

        Quote deppressed1 = new Quote(
                "Don't let life discourage you; everyone who got where he is had to begin where he was.",
                "Richard L. Evans",
                depressed );
        quoteRepository.save(deppressed1);

        Quote depressed2 = new Quote(
                "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
                "Martin Luther King Jr.",
                depressed
        );
        quoteRepository.save(depressed2);

        Quote depressed3 = new Quote(
                "The darkest hour has only sixty minutes.",
                "Morris Mandel",
                depressed
        );
        quoteRepository.save(depressed3);

        Quote ecstatic1 = new Quote(
                "Happiness is when what you think, what you say, and what you do are in harmony.",
                "Mahatma Gandhi",
                ecstatic
        );
        quoteRepository.save(ecstatic1);


        Quote ecstatic2 = new Quote(
                "There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.",
                "Stephen Chbosky",
                ecstatic
        );
        quoteRepository.save(ecstatic2);

        Quote ecstatic3 = new Quote(
                "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
                "Roy T. Bennett",
                ecstatic
        );
        quoteRepository.save(ecstatic3);

        Quote happy1 = new Quote(
                "Love is that condition in which the happiness of another person is essential to your own.",
                "Robert A. Heinlein",
                happy
        );
        quoteRepository.save(happy1);

        Quote happy2 = new Quote(
                "Count your age by friends, not years. Count your life by smiles, not tears.",
                "John Lennon",
                happy
        );
        quoteRepository.save(happy2);

        Quote happy3 = new Quote(
                "Happiness depends upon ourselves.",
                "Aristotle",
                happy
        );
        quoteRepository.save(happy3);

        Quote neutral1 = new Quote(
                "Happiness is a warm puppy.",
                "Charles M. Schulz",
                neutral
        );
        quoteRepository.save(neutral1);

        Quote neutral2 = new Quote(
                "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
                "J.R.R. Tolkien",
                neutral
        );
        quoteRepository.save(neutral2);

        Quote neutral3 = new Quote(
                "Happiness is not the absence of problems, it's the ability to deal with them.",
                "Steve Maraboli",
                neutral
        );
        quoteRepository.save(neutral3);

        Quote sad1 = new Quote(
                "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
                "Helen Keller",
                sad
        );
        quoteRepository.save(sad1);

        Quote sad2 = new Quote(
                "A positive attitude gives you power over your circumstances instead of your circumstances having power over you.",
                "Joyce Meyer",
                sad
        );
        quoteRepository.save(sad2);

        Quote sad3 = new Quote(
                "Man is fond of counting his troubles, but he does not count his joys. If he counted them up as he ought to, he would see that every lot has enough happiness provided for it.",
                "Fyodor Dostoevsky",
                sad
        );
        quoteRepository.save(sad3);



    }
}
