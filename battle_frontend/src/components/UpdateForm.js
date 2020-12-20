import React, {useState} from "react";
import warriorsService from "../services/warriors";

const UpdateForm = ({warriors, setWarriors, upId}) => {

    const [updatedName, setUpdatedName] = useState("")

    const handleChange = async (event) => {
        event.preventDefault()

        const x = warriors.find(a=>a.id===upId)
        const updatedWarrior = {...x, name: updatedName}
        console.log("aaa", updatedName)
        const newWarriorPromise = warriorsService.updateWarriorServer(upId, updatedWarrior)
        console.log("bbb", updatedWarrior)
        const response = await newWarriorPromise
        console.log("ccc", response)
        console.log("before", warriors)
        const newWarriors = warriors.map(w=> w.name!==x.name ? w: response.data)
        console.log("afteer", newWarriors)
        setWarriors(newWarriors)
        setUpdatedName("")
    }
    return(
        <div>
            <h4>Update the warrior:</h4>
            <form onSubmit={handleChange}>
                <div>
                    New name: <input type="text" value={updatedName} onChange={({target}) =>
                    setUpdatedName(target.value)}/>
                </div>
                <button id="update-button">change</button>
            </form>
        </div>
    )
}

export default UpdateForm