package com.lister.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lister.model.ListModel;
import com.lister.repository.ListRepository;

@Service
public class ListService {
	
	private ListRepository repo;
	
	@Autowired
	public void setRepo(ListRepository repo) {
		this.repo = repo;
	}
	
	public List<ListModel> getAll() {
		return repo.findAll();
	}
}
