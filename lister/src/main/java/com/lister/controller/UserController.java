package com.lister.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lister.model.User;
import com.lister.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	private UserService service;
	
	@Autowired
	public void setUser(UserService user) {
		this.service = user;
	}

	@PostMapping
	public ResponseEntity<User> createNewUser(@RequestBody User user) {
		HttpStatus status = service.create(user);
		return ResponseEntity.status(status).body(user);
	}
}
