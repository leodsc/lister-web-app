package com.lister.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lister.model.ListModel;
import com.lister.services.ListService;

@RestController
@RequestMapping("/list")
@CrossOrigin("*")
public class ListController {

	@Autowired
	private ListService service;

	@GetMapping
	public List<ListModel> getAllLists(@RequestParam(name="user") long id) {
		return service.getAll(id);
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<ListModel> getList(@PathVariable String name) {
		return service.getList(name)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<ListModel> post(@RequestBody ListModel list) {
		return ResponseEntity.ok(service.create(list));
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		service.delete(id);
	}
}
