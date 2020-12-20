import React from "react";
import warriorsService from "../services/warriors";

const Warrior = ({warrior, warriors, setWarriors, setOptions, setUpId}) => {

    const handleUpdate = async (id) => {
        setUpId(id)
    }

    const handleDelete = async (id) => {
        console.log("dddddd", id)
        const newWarriorPromise = warriorsService.deleteWarriorServer(id)
        const response = await newWarriorPromise
        console.log(response)
        const newWarriors = warriors.filter(x => x.id !== id)
        setWarriors(newWarriors)
        const opt = newWarriors.map(x => ({
            "value": x.id,
            "label": x.name
        }))
        setOptions(opt)
    }
    console.log("warriorsssss:", warriors)

    console.log("n", warrior)
    return (
        <li>bojovnik: {warrior.id} {warrior.name}, strength: {warrior.strength}, speed: {warrior.speed},
            toughness: {warrior.toughness}
            <button onClick={() => handleUpdate(warrior.id)}>update</button>
            <button onClick={() => handleDelete(warrior.id)}>delete</button>
        </li>
    )
}

export default Warrior