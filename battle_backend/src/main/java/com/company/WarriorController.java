package com.company;

import com.mongodb.client.result.DeleteResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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
        first.setToughness(first.getToughness());
        first.setSpeed(first.getSpeed());
        first.setStrength(first.getStrength());
        warriorRegister.put(first.getId(), first);

        Warrior second = new Warrior();
        second.setId("2");
        second.setName("Second");
        second.setToughness(second.getToughness());
        second.setSpeed(second.getSpeed());
        second.setStrength(second.getStrength());
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
        return new ResponseEntity<>(warriorRegister.values(), HttpStatus.OK);
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
        warriorRegister.put(warrior.getId(), warrior);
        return new ResponseEntity<>(warrior, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/warriors/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Warrior> updateWarrior(@PathVariable("id") String id, @RequestBody Warrior warrior) {
        warriorRegister.remove(id);
        warrior.setId(id);
        warriorRegister.put(id, warrior);
        return new ResponseEntity<>(warrior, HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@PathVariable("id") String id) {
//        warriorRegister.remove(id);
        Criteria criteria1 = Criteria.where("id").is(id);
        Query query1 = Query.query(criteria1);
        DeleteResult deleteResult= mongoTemplate.remove(query1, Warrior.class);
//        System.out.println("Deleted documents: " + deleteResult.getDeletedCount());
        return new ResponseEntity<>("Warrior was deleted", HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/{id1}/{id2}")
    public ResponseEntity<ArrayList<Duel>> getBattle(@PathVariable("id1") String id1, @PathVariable("id2") String id2) {
        Duel duel = new Duel(id1, id2);
        duelRegister.add(duel);
        return new ResponseEntity<>(duelRegister, HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/duels")
    public ResponseEntity<ArrayList<Duel>> getDuels() {
        return new ResponseEntity<>(duelRegister, HttpStatus.OK);
    }
}
