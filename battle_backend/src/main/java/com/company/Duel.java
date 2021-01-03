package com.company;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "duels")
public class Duel {

    private Warrior rival1;
    private Warrior rival2;
    private int winner;
    private String id;

    public Duel(){ }

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

    public int getWinner() {
        return winner;
    }

    public String getId() {
        return id;
    }

    private void calculate(){
        double result1 = rival1.getStrength()*Math.random()+ rival1.getSpeed()*Math.random()+ rival1.getToughness()*Math.random();
        double result2 = rival2.getStrength()*Math.random()+ rival2.getSpeed()*Math.random()+ rival2.getToughness()*Math.random();
        if(result1>result2) {
            winner = -1;
        }if(result1<result2){
            winner = 1;
        }else{
            winner = 0;
        }
    }
}
