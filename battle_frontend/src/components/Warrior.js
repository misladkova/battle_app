import React from "react";

const Warrior = ({warrior, handleUpdate, handleDelete}) => {
    console.log("n", warrior)
    return(
        <li>bojovnik: {warrior.id} {warrior.name}<button onClick={handleUpdate}>update</button><button onClick={() =>
            handleDelete(warrior.id)}>delete</button></li>
    )
}

export default Warrior