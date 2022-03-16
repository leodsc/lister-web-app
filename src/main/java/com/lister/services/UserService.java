package com.lister.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.lister.model.User;
import com.lister.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
		
	public HttpStatus create(User user) {
		String email = user.getUsername();
		return repository.findByEmailAddress(email)
				.map(resp -> HttpStatus.CONFLICT)
				.orElseGet(() -> {
					repository.save(user);
					return HttpStatus.CREATED;
				});
	}
	
	public List<User> getAll() {
		return repository.findAll();
	}
}
