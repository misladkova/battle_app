import warriorsService from "../services/warriors";
import React, {useState} from "react";

const CreateForm = ({warriors, setWarriors, setOptions}) => {

    const [newName, setNewName] = useState("")

    const handleCreate = async (event) => {
        event.preventDefault()
        console.log("aaa")

        const warriorObj = {name: newName}
        const newWarriorPromise = warriorsService.addWarriorServer(warriorObj)
        setNewName("")
        const response = await newWarriorPromise
        console.log("r", response)
        const newWarriors = warriors.concat(response.data)
        console.log("l", newWarriors)
        setWarriors(newWarriors)
        const opt = newWarriors.map(x => ({
            "value": x.id,
            "label": x.name
        }))
        setOptions(opt)
    }

    return(
        <div>
            <h3>Create new warrior:</h3>
            <form onSubmit={handleCreate}>
                <div>
                    Name: <input id="title" type="text" value={newName} onChange={({target}) =>
                    setNewName(target.value)}/>
                </div>
                <button id="create-button" type="submit">add</button>
            </form>
        </div>
    )
}

export default CreateForm