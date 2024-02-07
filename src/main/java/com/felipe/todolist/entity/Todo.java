package com.felipe.todolist.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="todos")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime criationDate;

    @NotBlank
    private String nome;
    @NotBlank
    private String descricao;
    private boolean realizado;
    private int prioridade;
    
    public Todo(LocalDateTime criationDate, @NotBlank String nome, @NotBlank String descricao, boolean realizado, int prioridade) {
        this.criationDate = criationDate;
        this.nome = nome;
        this.descricao = descricao;
        this.realizado = realizado;
        this.prioridade = prioridade;
    }

    public Todo() {
    }

    public LocalDateTime getCriationDate() {
        return criationDate;
    }

    public void setCriationDate(LocalDateTime criationDate) {
        this.criationDate = criationDate;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public boolean isRealizado() {
        return realizado;
    }
    public void setRealizado(boolean realizado) {
        this.realizado = realizado;
    }
    public int getPrioridade() {
        return prioridade;
    }
    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }

}
