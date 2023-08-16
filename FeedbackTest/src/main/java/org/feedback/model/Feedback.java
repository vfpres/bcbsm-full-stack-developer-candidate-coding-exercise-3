package org.feedback.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Feedback {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @JsonIgnore
        private Long id;
        private int ratingValue;
        private String comment;

        @ManyToOne
        private User user;

        @Temporal(TemporalType.TIMESTAMP)
        private Date date;

}
