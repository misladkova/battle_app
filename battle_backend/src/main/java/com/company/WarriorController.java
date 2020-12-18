package com.company;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class WarriorController {
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

    @RequestMapping(value = "/warriors")
    public ResponseEntity<Collection<Warrior>> getWarrior() {
        return new ResponseEntity<>(warriorRegister.values(), HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors/{id}")
    public ResponseEntity<Warrior> getWarrior(@PathVariable("id") String id){
        return new ResponseEntity<>(warriorRegister.get(id), HttpStatus.OK);
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
        warriorRegister.remove(id);
        return new ResponseEntity<>("Warrior was deleted", HttpStatus.OK);
    }
}
