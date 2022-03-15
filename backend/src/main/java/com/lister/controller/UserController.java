package com.lister.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lister.model.User;
import com.lister.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;
	
	
	@GetMapping("/{user}")
	public ResponseEntity<List<User>> getAll() {
		return ResponseEntity.ok().body(service.getAll());
	}

	@PostMapping
	public ResponseEntity<User> createNewUser(@RequestBody User user) {
		HttpStatus status = service.create(user);
		return ResponseEntity.status(status).body(user);
	}
}
