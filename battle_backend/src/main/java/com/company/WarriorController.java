package com.company;

import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class WarriorController {
    @Autowired
    MongoTemplate mongoTemplate;
    private static Map<String, Warrior> warriorRegister = new HashMap<>();
    static {
        Warrior first = new Warrior();
        first.setId("1");
        first.setName("First");
        warriorRegister.put(first.getId(), first);

        Warrior second = new Warrior();
        second.setId("2");
        second.setName("Second");
        warriorRegister.put(second.getId(), second);
    }

    private static ArrayList<Duel> duelRegister = new ArrayList<>();
    static {
        Duel duel1 = new Duel("One", "Two");
        duelRegister.add(duel1);
        Duel duel2 = new Duel("Two", "One");
        duelRegister.add(duel2);
    }

    @RequestMapping(value = "/warriors")
    public ResponseEntity<Collection<Warrior>> getWarrior() {
        Collection<Warrior> warriors = mongoTemplate.findAll(Warrior.class);
//        return new ResponseEntity<>(warriorRegister.values(), HttpStatus.OK);
        return new ResponseEntity<>(warriors, HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/{id}")
    public ResponseEntity<Warrior> getWarrior(@PathVariable("id") String id){
        Criteria criteria = Criteria.where("id").is(id);
        Query query = Query.query(criteria);
        Warrior warrior1 = mongoTemplate.findOne(query, Warrior.class);
//        System.out.println(warrior1);
        return new ResponseEntity<>(warrior1, HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors", method = RequestMethod.POST)
    public ResponseEntity<Warrior> createWarrior(@RequestBody Warrior warrior) {
//        warriorRegister.put(warrior.getId(), warrior);
        mongoTemplate.insert(warrior);
        return new ResponseEntity<>(warrior, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/warriors/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Warrior> updateWarrior(@PathVariable("id") String id, @RequestBody Warrior warrior) {
//        warriorRegister.remove(id);
//        warrior.setId(id);
//        warriorRegister.put(id, warrior);
        Query query2 = new Query(new Criteria("id").is("1"));
        Update update = new Update().set("name", warrior.getName());
        UpdateResult result = mongoTemplate.updateFirst(query2, update, Warrior.class);
        return new ResponseEntity<>(warrior, HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@PathVariable("id") String id) {
//        warriorRegister.remove(id);
        Criteria criteria1 = Criteria.where("id").is(id);
        Query query1 = Query.query(criteria1);
        DeleteResult deleteResult= mongoTemplate.remove(query1, Warrior.class);
        return new ResponseEntity<>("Warrior was deleted", HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/{name1}/{name2}")
    public ResponseEntity<Collection<Duel>> getBattle(@PathVariable("name1") String rivalName1, @PathVariable("name2") String rivalName2) {
//        Duel duel = new Duel(id1, id2);
//        duelRegister.add(duel);
        Criteria criteria1 = Criteria.where("name").is(rivalName1);
        Query query1 = Query.query(criteria1);
        Warrior warrior1 = mongoTemplate.findOne(query1, Warrior.class);
        Criteria criteria2 = Criteria.where("name").is(rivalName2);
        Query query2 = Query.query(criteria2);
        Warrior warrior2 = mongoTemplate.findOne(query2, Warrior.class);
        Duel duel = new Duel(rivalName1, rivalName2);
        mongoTemplate.insert(duel);
        Collection<Duel> duels = mongoTemplate.findAll(Duel.class);
//        return new ResponseEntity<>(duelRegister, HttpStatus.OK);
        return new ResponseEntity<>(duels, HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/duels")
    public ResponseEntity<Collection<Duel>> getDuels() {
        Collection<Duel> duels = mongoTemplate.findAll(Duel.class);
//        return new ResponseEntity<>(duelRegister, HttpStatus.OK);
        return new ResponseEntity<>(duels, HttpStatus.OK);
    }
}
