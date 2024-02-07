package com.felipe.todolist;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.felipe.todolist.entity.Todo;
import com.felipe.todolist.repository.TodoRepository;

@SpringBootApplication
public class TodolistApplication {
/* 
	@Bean
	public CommandLineRunner onInit(TodoRepository rep){
		return args->{
			Todo task = new Todo();
			task.setCriationDate(LocalDateTime.now());
			task.setNome("tarefa 2");
			task.setDescricao("adicionando o tarefa 2");
			task.setRealizado(true);
			task.setPrioridade(1);

			rep.save(task);
		};
	}
*/
	public static void main(String[] args) {
		SpringApplication.run(TodolistApplication.class, args);
		System.out.println("=====================");
		System.out.println("*** success build ***");
		System.out.println("=====================");
	}

}
