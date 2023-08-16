package org.feedback.controller;

import org.feedback.model.User;
import org.feedback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> authenticateUser(@RequestBody User loginRequest) {

        User user = userService.findByUsername(loginRequest.getName());
        if(loginRequest.getPassword().equals(user.getPassword()))
            return new ResponseEntity<>("Success", HttpStatus.valueOf(200));
        else
            return new ResponseEntity<>("Error", HttpStatus.valueOf(400));
    }
}