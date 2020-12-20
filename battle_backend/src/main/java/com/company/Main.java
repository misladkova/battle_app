package com.company;

import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class Main implements CommandLineRunner{

    @Autowired
    private WarriorRepository repository;

    public static void main(String[] args) {

//        SpringApplication.run(Main.class, args);
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

//        Warrior warrior = new Warrior();
//        warrior.setId("1");
//        warrior.setName("FirstWarrior");
//        warrior.setToughness(warrior.getToughness());
//        warrior.setSpeed(warrior.getSpeed());
//        warrior.setStrength(warrior.getStrength());
//        mongoTemplate.insert(warrior);
//
//        Criteria criteria = Criteria.where("id").is("3");
//        Query query = Query.query(criteria);
//        Warrior warrior1 = mongoTemplate.findOne(query, Warrior.class);
//        System.out.println(warrior1);
//
//        Criteria criteria1 = Criteria.where("id").is("3");
//        Query query1 = Query.query(criteria1);
//        DeleteResult deleteResult= mongoTemplate.remove(query1, Warrior.class);
//        System.out.println("Deleted documents: " + deleteResult.getDeletedCount());
//
//        Query query2 = new Query(new Criteria("id").is("5"));
//        Update update = new Update().set("name", "Third");
//
//
//        UpdateResult result = mongoTemplate.updateFirst(query2, update, Warrior.class);
//        System.out.println("Modified documents: " + result.getModifiedCount());
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/warriors").allowedOrigins("http://localhost:3000");
                registry.addMapping("/warriors/{id}").allowedOrigins("http://localhost:3000");
                registry.addMapping("/warriors/{id1}/{id2}").allowedOrigins("http://localhost:3000");
            }
        };
    }
}


