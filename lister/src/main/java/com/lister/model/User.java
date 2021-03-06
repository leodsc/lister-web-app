package com.lister.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="tb_users")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min=3, max=32)
	private String name;

	@NotNull
	@Size(min=4, max=255)
	private String email;
	
	@NotNull
	@Size(min=4, max=512)
	private String password;
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@JsonIgnoreProperties("tb_list")
	private List<ListModel> list;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<ListModel> getList() {
		return list;
	}

	public void setList(List<ListModel> list) {
		this.list = list;
	}
}
