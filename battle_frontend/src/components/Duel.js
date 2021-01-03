import React from "react";

const Duel = ({duel}) => {
    let winner_str = "draw"
    if(duel.winner === 1){
        winner_str = duel.rival2.name
    } else if (duel.winner===-1){
        winner_str = duel.rival1.name
    }
    return(
        <li className="list-group-item">{duel.rival1.name} vs {duel.rival2.name}, winner: {winner_str}</li>
    )
}

export default Duel