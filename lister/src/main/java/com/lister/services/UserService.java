package com.lister.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.lister.model.User;
import com.lister.repository.UserRepository;

@Service
public class UserService {
	
	private UserRepository repository;
	
	@Autowired
	public void setRepository(UserRepository repository) {
		this.repository = repository;
	}
	
	public HttpStatus create(User user) {
		String email = user.getEmail();
		return repository.findByEmailAddress(email)
				.map(resp -> HttpStatus.CONFLICT)
				.orElseGet(() -> {
					repository.save(user);
					return HttpStatus.OK;
				});
	}
}
