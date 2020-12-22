import React from "react";

const Duel = ({duel}) => {
    return(
        <li>{duel.rival1.name} vs {duel.rival2.name}, winner: {duel.winner}</li>
    )
}

export default Duel