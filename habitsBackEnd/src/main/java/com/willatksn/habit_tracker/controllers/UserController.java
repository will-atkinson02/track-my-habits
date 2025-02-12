package com.willatksn.habit_tracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willatksn.habit_tracker.services.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/testDb")
    public String testDatabase() {
        // Save a test user
        userService.saveUser(1L, "John Doe", "john.doe@example.com");
        return "User saved to the database!";
    }
}