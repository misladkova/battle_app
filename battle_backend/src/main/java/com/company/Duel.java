package com.company;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "duels")
public class Duel {

    private Warrior rival1;
    private Warrior rival2;
    private String winner;

    public Duel(Warrior rival1, Warrior rival2){
        this.rival1 = rival1;
        this.rival2 = rival2;
        calculate();
    }

    public Warrior getRival1() {
        return rival1;
    }

    public Warrior getRival2() {
        return rival2;
    }

    public String getWinner() {
        return winner;
    }

    private void calculate(){
        double result1 = rival1.getStrength()*Math.random()+ rival1.getSpeed()*Math.random()+ rival1.getToughness()*Math.random();
        double result2 = rival2.getStrength()*Math.random()+ rival2.getSpeed()*Math.random()+ rival2.getToughness()*Math.random();
        if(result1>result2) {
            winner = rival1.getName();
        }else{
            winner = rival2.getName();
        }
    }
}
