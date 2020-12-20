import warriorsService from "../services/warriors";
import React, {useState} from "react";

const CreateForm = ({warriors, setWarriors}) => {

    const [newName, setNewName] = useState("")

    const handleCreate = async (event) => {
        event.preventDefault()

        const warriorObj = {name: newName}
        const newWarriorPromise = warriorsService.addWarriorServer(warriorObj)
        setNewName("")
        const response = await newWarriorPromise
        const newWarriors = warriors.concat(response.data)
        setWarriors(newWarriors)
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