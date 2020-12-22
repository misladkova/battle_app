import React from "react";
import warriorsService from "../services/warriors";

const Warrior = ({warrior, warriors, setWarriors, setUpId, setUpdateVisible}) => {

    const handleUpdate = async (id) => {
        setUpId(id)
        setUpdateVisible(true)
    }

    const handleDelete = async (id) => {
        const newWarriorPromise = warriorsService.deleteWarriorServer(id)
        await newWarriorPromise
        const newWarriors = warriors.filter(x => x.id !== id)
        setWarriors(newWarriors)
    }

    return (
        <li>Warrior: {warrior.id} {warrior.name}, strength: {warrior.strength}, speed: {warrior.speed},
            toughness: {warrior.toughness}

            <img src={`data:image/jpeg;base64,${warrior.file}`} alt="aaa" width="50"/>
            <button onClick={() => handleUpdate(warrior.id)}>update</button>
            <button onClick={() => handleDelete(warrior.id)}>delete</button>
        </li>
    )
}

export default Warrior