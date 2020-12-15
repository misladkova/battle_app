package com.company;

import org.springframework.web.bind.annotation.RestController;

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
}
