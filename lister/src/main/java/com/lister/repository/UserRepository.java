package com.lister.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lister.model.User;

@Repository
public interface UserRepository 
	extends JpaRepository<User, Long> {
	
	@Query(value="SELECT * FROM tb_users WHERE email = ?1", 
			nativeQuery=true)
	public Optional<User> findByEmailAddress(String email);
	
	public User findByUsername(String username);
}
