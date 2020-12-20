package com.company;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class Config {

    String dbPass =  System.getenv("DB_PASS");
    String dbUser = System.getenv("DB_USER");
    String db = System.getenv("DB");

    public MongoClient mongoClient() {
        return MongoClients.create("mongodb+srv://"+dbUser+":"+dbPass+"@cluster0.b2qrq.mongodb.net/"+db+"?retryWrites=true&w=majority");
    }

    public @Bean
    MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoClient(), db);
    }
}
