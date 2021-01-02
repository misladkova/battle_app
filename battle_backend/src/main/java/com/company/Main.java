package com.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class Main implements CommandLineRunner{

    @Autowired
    private WarriorRepository repository;

    public static void main(String[] args) {

        ApplicationContext ctx = (ApplicationContext)SpringApplication.run(Main.class, args);
        System.out.println("Start");
        WarriorRepository warriorRepository = ctx.getBean(WarriorRepository.class);
        System.out.println("End");
    }

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Collection Exists? " + mongoTemplate.collectionExists("warriors"));
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/warriors").allowedOrigins("http://localhost:3000");
                registry.addMapping("/warriors/{id}").allowedOrigins("http://localhost:3000");
                registry.addMapping("/warriors/{id1}/{id2}").allowedOrigins("http://localhost:3000");
                registry.addMapping("/warriors/duels").allowedOrigins("http://localhost:3000");
            }
        };
    }
}


