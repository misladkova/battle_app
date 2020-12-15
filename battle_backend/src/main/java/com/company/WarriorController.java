package com.company;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
public class WarriorController {
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

    @RequestMapping(value = "/warriors")
    public ResponseEntity<Collection<Warrior>> getWarrior() {
        return new ResponseEntity<>(warriorRegister.values(), HttpStatus.OK);
    }

    @RequestMapping(value = "/warriors", method = RequestMethod.POST)
    public ResponseEntity<Warrior> createProduct(@RequestBody Warrior warrior) {
        warriorRegister.put(warrior.getId(), warrior);
        return new ResponseEntity<>(warrior, HttpStatus.CREATED);
    }
}
