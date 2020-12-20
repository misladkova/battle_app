package com.company;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class Config {

    public MongoClient mongoClient() {
        String dbPass =  System.getenv("DB_PASS");
        return MongoClients.create("mongodb+srv://mislad:"+dbPass+"@cluster0.b2qrq.mongodb.net/battle?retryWrites=true&w=majority");
    }

    public @Bean
    MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoClient(), "battle");
    }
}
