package com.lister.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lister.model.ListModel;
import com.lister.services.ListService;

@RestController
@RequestMapping("/list")
@CrossOrigin("*")
public class ListController {

	private ListService service;
	
	@Autowired
	public void setService(ListService service) {
		this.service = service;
	}

	@GetMapping
	public List<ListModel> getPost() {
		return service.getAll();
	}
}
