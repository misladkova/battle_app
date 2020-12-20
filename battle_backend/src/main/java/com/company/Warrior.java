package com.company;

import java.util.Random;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "warriors")
public class Warrior{
    @Id
    private String id;
    private String name;
    private int strength = new Random().nextInt(1000);
    private int speed = new Random().nextInt(1000);
    private int toughness = new Random().nextInt(1000);

    public String getId(){
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public void setToughness(int toughness) {
        this.toughness = toughness;
    }

    public int getToughness() {
        return toughness;
    }

    public int getSpeed() {
        return speed;
    }

    public int getStrength() {
        return strength;
    }
}



