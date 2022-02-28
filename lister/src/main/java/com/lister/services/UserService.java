package com.lister.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.lister.model.User;
import com.lister.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Bean
	private BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
	
	public HttpStatus create(User user) {
		String email = user.getEmail();
		return repository.findByEmailAddress(email)
				.map(resp -> HttpStatus.CONFLICT)
				.orElseGet(() -> {
					String encoded = encoder().encode(user.getPassword());
					user.setPassword(encoded);
					repository.save(user);
					return HttpStatus.OK;
				});
	}
}
