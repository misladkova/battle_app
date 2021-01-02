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
        // <li>Warrior: {warrior.id} {warrior.name}, strength: {warrior.strength}, speed: {warrior.speed},
        //     toughness: {warrior.toughness}
        //
        //     <img src={`data:image/jpeg;base64,${warrior.file}`} alt="aaa" width="50"/>
        //     <button onClick={() => handleUpdate(warrior.id)}>update</button>
        //     <button onClick={() => handleDelete(warrior.id)}>delete</button>
        // </li>

        // <div className="row mt-3">
        // <div className="card-deck">
        //     <div className="card">
        //         <img className="card-img-top" src="..." alt="Card image cap"/>
        //             <div className="card-body">
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in
        //                     to additional content. This content is a little bit longer.</p>
        //                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //             </div>
        //     </div>
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={`data:image/jpeg;base64,${warrior.file}`} alt="Warrior_image"
                     width="150" height="100"/>
                    <div className="card-body">
                        <h5 className="card-title">Warrior: {warrior.name}</h5>
                        <p className="card-text">strength: {warrior.strength}, speed: {warrior.speed},
                                                        toughness: {warrior.toughness}</p>
                        <button class="btn btn-outline-primary btn-sm mt-2 mb-2 ml-2 mr-2" onClick={() =>
                            handleUpdate(warrior.id)}>update</button>
                        <button class="btn btn-outline-primary btn-sm" onClick={() => handleDelete(warrior.id)}>delete</button>
                        <p className="card-text"><small className="text-muted">Id: {warrior.id}</small></p>
                    </div>
            </div>
        </div>
)}

export default Warrior