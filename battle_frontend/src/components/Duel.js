import React from "react";

const Duel = ({duel}) => {
    return(
        <li>{duel.rivalName1} vs {duel.rivalName2}, winner: {duel.winner}</li>
    )
}

export default Duel