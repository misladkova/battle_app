package com.company;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "duels")
public class Duel {

    private String rivalName1;
    private String rivalName2;
    private String winner;

    public Duel(String rivalName1, String rivalName2){
        this.rivalName1 = rivalName1;
        this.rivalName2 = rivalName2;
        calculate();
    }

    public String getRivalName1(){
        return rivalName1;
    }

    public String getRivalName2(){
        return rivalName2;
    }

    public String getWinner(){
        return winner;
    }

    private void calculate(){
        winner = rivalName1;
    }
}
