package org.feedback.controller;

import org.feedback.DTO.FeedbackDTO;
import org.feedback.model.Feedback;
import org.feedback.model.Role;
import org.feedback.model.User;
import org.feedback.repository.FeedbackRepository;
import org.feedback.repository.UserRepository;
import org.feedback.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    FeedbackRepository feedbackRepository;

    @Autowired
    FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<String> submitFeedback(@RequestBody FeedbackDTO feedback) {
        feedbackService.saveFeedback(feedback);
        return ResponseEntity.ok("Feedback submitted successfully");
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> getFeedback(@RequestParam String user){
        User data = feedbackService.getUser(user);
        List<Feedback> feedbacks;
        if(data.getRole().equals(Role.USER)) {
            feedbacks = feedbackRepository.findByUser(data);
        }
        else{
            feedbacks = feedbackRepository.findAll();
        }
        return ResponseEntity.ok(feedbacks);
    }
}
