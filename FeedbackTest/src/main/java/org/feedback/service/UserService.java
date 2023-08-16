package org.feedback.service;

import org.feedback.model.User;
import org.feedback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findByUsername(String username) {
        return userRepository.findByName(username);
    }

    public boolean valid(String username, String password){
        User user = findByUsername(username);
        if(user.getPassword().equals(password))
            return true;
        else
            return false;
    }
}

