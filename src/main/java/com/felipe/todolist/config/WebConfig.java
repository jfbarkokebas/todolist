package com.felipe.todolist.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**");
    }
}

/*
 * dessa forma está totalmente aberto para qualquer origem acessar, mas pode ser configurado pelos métdos do ADDMAPPING()
 */