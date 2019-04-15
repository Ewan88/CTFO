package com.codeclan.example.ctfo_server.components;

import com.codeclan.example.ctfo_server.models.*;
import com.codeclan.example.ctfo_server.models.resources.*;
import com.codeclan.example.ctfo_server.repository.Images.*;
import com.codeclan.example.ctfo_server.repository.Journals.MoodJournalRepository;
import com.codeclan.example.ctfo_server.repository.Moods.MoodRepository;
import com.codeclan.example.ctfo_server.repository.Quotes.QuoteRepository;
import com.codeclan.example.ctfo_server.repository.Videos.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.text.SimpleDateFormat;

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

        Mood sad = new Mood("Sad");
        moodRepository.save(sad);

        Mood neutral = new Mood("Neutral");
        moodRepository.save(neutral);

        Mood happy = new Mood("Happy");
        moodRepository.save(happy);

        Mood ecstatic = new Mood("Ecstatic");
        moodRepository.save(ecstatic);

        Quote depressedQuote1 = new Quote(
                "Don't let life discourage you; everyone who got where he is had to begin where he was.",
                "Richard L. Evans",
                depressed );
        quoteRepository.save(depressedQuote1);

        Quote depressedQuote2 = new Quote(
                "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
                "Martin Luther King Jr.",
                depressed
        );
        quoteRepository.save(depressedQuote2);

        Quote depressedQuote3 = new Quote(
                "The darkest hour has only sixty minutes.",
                "Morris Mandel",
                depressed
        );
        quoteRepository.save(depressedQuote3);

        Quote ecstaticQuote1 = new Quote(
                "Happiness is when what you think, what you say, and what you do are in harmony.",
                "Mahatma Gandhi",
                ecstatic
        );
        quoteRepository.save(ecstaticQuote1);


        Quote ecstaticQuote2 = new Quote(
                "There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.",
                "Stephen Chbosky",
                ecstatic
        );
        quoteRepository.save(ecstaticQuote2);

        Quote ecstaticQuote3 = new Quote(
                "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
                "Roy T. Bennett",
                ecstatic
        );
        quoteRepository.save(ecstaticQuote3);

        Quote happyQuote1 = new Quote(
                "Love is that condition in which the happiness of another person is essential to your own.",
                "Robert A. Heinlein",
                happy
        );
        quoteRepository.save(happyQuote1);

        Quote happyQuote2 = new Quote(
                "Count your age by friends, not years. Count your life by smiles, not tears.",
                "John Lennon",
                happy
        );
        quoteRepository.save(happyQuote2);

        Quote happyQuote3 = new Quote(
                "Happiness depends upon ourselves.",
                "Aristotle",
                happy
        );
        quoteRepository.save(happyQuote3);

        Quote neutralQuote1 = new Quote(
                "Happiness is a warm puppy.",
                "Charles M. Schulz",
                neutral
        );
        quoteRepository.save(neutralQuote1);

        Quote neutralQuote2 = new Quote(
                "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
                "J.R.R. Tolkien",
                neutral
        );
        quoteRepository.save(neutralQuote2);

        Quote neutralQuote3 = new Quote(
                "Happiness is not the absence of problems, it's the ability to deal with them.",
                "Steve Maraboli",
                neutral
        );
        quoteRepository.save(neutralQuote3);

        Quote sadQuote1 = new Quote(
                "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
                "Helen Keller",
                sad
        );
        quoteRepository.save(sadQuote1);

        Quote sadQuote2 = new Quote(
                "A positive attitude gives you power over your circumstances instead of your circumstances having power over you.",
                "Joyce Meyer",
                sad
        );
        quoteRepository.save(sadQuote2);

        Quote sadQuote3 = new Quote(
                "Man is fond of counting his troubles, but he does not count his joys. If he counted them up as he ought to, he would see that every lot has enough happiness provided for it.",
                "Fyodor Dostoevsky",
                sad
        );
        quoteRepository.save(sadQuote3);

        Image image1 = new Image(
                "https://i1.wp.com/shscrosscountry.com/wp-content/uploads/2016/07/p01-flex.jpg?resize=670%2C354"
        );
        imageRepository.save(image1);

        Image image2 = new Image(
                "https://i.pinimg.com/originals/f5/75/76/f57576cf5006217833264ebc34549123.png"
        );
        imageRepository.save(image2);

        Image image3 = new Image(
                "https://www.researchgate.net/profile/Christos_Papadopoulos/publication/288630711/figure/fig1/AS:330422379663364@1455790242443/The-seven-static-stretching-exercises.png"
        );
        imageRepository.save(image3);

        Image image4 = new Image(
                "https://i.pinimg.com/originals/76/e0/9d/76e09d3698e370f46281b2d318afc259.jpg"
        );
        imageRepository.save(image4);

        depressed.addImage(image1);
        depressed.addImage(image2);
        depressed.addImage(image3);
        depressed.addImage(image4);
        moodRepository.save(depressed);

        ecstatic.addImage(image1);
        ecstatic.addImage(image2);
        ecstatic.addImage(image3);
        ecstatic.addImage(image4);
        moodRepository.save(ecstatic);

        happy.addImage(image1);
        happy.addImage(image2);
        happy.addImage(image3);
        happy.addImage(image4);
        moodRepository.save(happy);

        neutral.addImage(image1);
        neutral.addImage(image2);
        neutral.addImage(image3);
        neutral.addImage(image4);
        moodRepository.save(neutral);

        sad.addImage(image1);
        sad.addImage(image2);
        sad.addImage(image3);
        sad.addImage(image4);
        moodRepository.save(sad);

        Video videoDepressed1 = new Video(
                "https://www.youtube.com/embed/T8_JATyButc?controls=0",
                depressed
        );
        videoRepository.save(videoDepressed1);

        Video videoDepressed2 = new Video(
                "https://www.youtube.com/embed/IDPDEKtd2yM?controls=0",
                depressed
        );
        videoRepository.save(videoDepressed2);

        Video videoEcstatic1 = new Video(
                "https://www.youtube.com/embed/4q1dgn_C0AU",
                ecstatic

        );
        videoRepository.save(videoEcstatic1);

        Video videoHappy1 = new Video(
                "https://www.youtube.com/embed/d-LKa1Y9_ok",
                happy
        );
        videoRepository.save(videoHappy1);

        Video videoNeutral1 = new Video(
                "https://www.youtube.com/embed/_LXiSPpfM54",
                neutral
        );
        videoRepository.save(videoNeutral1);

        Video videoNeutral2 = new Video(
                "https://www.youtube.com/embed/Kestt5BI3eg",
                neutral
        );
        videoRepository.save(videoNeutral2);

        Video videoSad1 = new Video(
                "https://www.youtube.com/embed/lLWEXRAnQd0",
                sad
        );
        videoRepository.save(videoSad1);

        Video videoSad2 = new Video(
                "https://www.youtube.com/embed/1iFpw0uIkbo",
                sad
        );
        videoRepository.save(videoSad2);

        SimpleDateFormat testDate = new SimpleDateFormat("2019-04-20");

        Journal journalEntry1 = new Journal(
                testDate,
                "test comment",
                "test mood"
        );
        moodJournalRepository.save(journalEntry1);
    }
}
