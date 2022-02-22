package com.lister.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lister.model.ListModel;

public interface ListRepository
	extends JpaRepository<ListModel, Long>{
}
