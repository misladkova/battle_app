package com.company;

public class Duel {

    private String rivalId1;
    private String rivalId2;
    private String winner;

    public Duel(String id1, String id2){
        rivalId1 = id1;
        rivalId2 = id2;
        calculate();
    }

    public String getRivalId1(){
        return rivalId1;
    }

    public String getRivalId2(){
        return rivalId2;
    }

    public String getWinner(){
        return winner;
    }

    private void calculate(){
        winner = rivalId1;
    }
}
