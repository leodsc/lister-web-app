package com.lister.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.lister.model.ListModel;

public interface ListRepository
	extends JpaRepository<ListModel, Long>{
	
	@Query(value="SELECT * FROM tb_list WHERE user_id = ?1",
			nativeQuery=true)
	public List<ListModel> findAllListsByUserId(long id);
	
	@Query(value="SELECT * FROM tb_list WHERE title = ?1",
			nativeQuery=true)
	public Optional<ListModel> findByListName(String name);
}
