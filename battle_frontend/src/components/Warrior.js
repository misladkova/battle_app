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
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={`data:image/jpeg;base64,${warrior.file}`} alt="Warrior_image"
                     width="150" height="100"/>
                    <div className="card-body">
                        <h5 className="card-title">Warrior: {warrior.name}</h5>
                        <p className="card-text">strength: {warrior.strength}, speed: {warrior.speed},
                                                        toughness: {warrior.toughness}</p>
                        <button className="btn btn-outline-primary btn-sm mt-2 mb-2 ml-2 mr-2" onClick={() =>
                            handleUpdate(warrior.id)}>update</button>
                        <button id="delete" className="btn btn-outline-primary btn-sm" onClick={() => handleDelete(warrior.id)}>delete</button>
                        <p className="card-text"><small className="text-muted">Id: {warrior.id}</small></p>
                    </div>
            </div>
        </div>
)}

export default Warrior