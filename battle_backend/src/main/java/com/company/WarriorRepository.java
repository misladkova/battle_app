package com.company;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface WarriorRepository extends MongoRepository<Warrior, String>{
}
