package org.feedback.DTO;

import lombok.Data;

@Data
public class FeedbackDTO {

    private int ratingValue;
    private String comment;
    private String username;

}
