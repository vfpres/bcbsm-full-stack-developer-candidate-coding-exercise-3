package org.feedback.service;

import org.feedback.DTO.FeedbackDTO;
import org.feedback.model.Feedback;
import org.feedback.model.User;
import org.feedback.repository.FeedbackRepository;
import org.feedback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    public User getUser(String user){
        User u = userRepository.findByName(user);
        System.out.println(u);
        return u;

    }
    public Feedback saveFeedback(FeedbackDTO feedbackDTO) {
        Feedback feedback = new Feedback();
        feedback.setRatingValue(feedbackDTO.getRatingValue());
        feedback.setComment(feedbackDTO.getComment());
        User u = getUser(feedbackDTO.getUsername());
        System.out.println(u);
        feedback.setUser(u);
        feedback.setDate(new Date());
        return feedbackRepository.save(feedback);
    }
}
