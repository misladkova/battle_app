import React from "react";

const Warrior = ({warrior, handleUpdate, handleDelete}) => {
    console.log("n", warrior)
    return (
        <li>bojovnik: {warrior.id} {warrior.name}, strength: {warrior.strength}, speed: {warrior.speed},
            toughness: {warrior.toughness}
            <button onClick={handleUpdate}>update</button>
            <button onClick={() =>
                handleDelete(warrior.id)}>delete
            </button>
        </li>
    )
}

export default Warrior