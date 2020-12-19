package com.company;

public class Duel {

    private String rivalName1;
    private String rivalName2;
    private String winner;

    public Duel(String id1, String id2){
        rivalName1 = id1;
        rivalName2 = id2;
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
