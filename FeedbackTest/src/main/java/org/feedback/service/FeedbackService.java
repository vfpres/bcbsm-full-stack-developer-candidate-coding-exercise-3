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
        return userRepository.findByName(user);
    }
    public Feedback saveFeedback(FeedbackDTO feedbackDTO) {
        Feedback feedback = new Feedback();
        feedback.setRatingValue(feedbackDTO.getRatingValue());
        feedback.setComment(feedbackDTO.getComment());
        feedback.setUser(getUser(feedbackDTO.getUsername()));
        feedback.setDate(new Date());
        return feedbackRepository.save(feedback);
    }
}
