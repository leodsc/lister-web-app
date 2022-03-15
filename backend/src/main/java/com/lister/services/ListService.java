package com.lister.services;

import java.util.List;
import java.util.Optional;

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
	
	public List<ListModel> getAll(long id) {
		return repo.findAllListsByUserId(id);
	}
	
	public Optional<ListModel> getList(String name) {
		return repo.findByListName(name);
	}
	
	public ListModel create(ListModel list) {
		return repo.save(list);
	}
	
	public void delete(long id) {
		repo.deleteById(id);
	}
}
