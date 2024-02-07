package com.felipe.todolist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodolistApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodolistApplication.class, args);
		System.out.println("=====================");
		System.out.println("*** success build ***");
		System.out.println("=====================");
	}

}
