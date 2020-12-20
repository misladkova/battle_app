import React, {useState} from "react";
import warriorsService from "../services/warriors";

const UpdateForm = ({warriors, setWarriors, upId, setUpdateVisible}) => {

    const [updatedName, setUpdatedName] = useState("")

    const handleChange = async (event) => {
        event.preventDefault()

        const x = warriors.find(a=>a.id===upId)
        const updatedWarrior = {...x, name: updatedName}
        const newWarriorPromise = warriorsService.updateWarriorServer(upId, updatedWarrior)
        const response = await newWarriorPromise
        const newWarriors = warriors.map(w=> w.name!==x.name ? w: response.data)
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
                <button id="update-button">change</button> <button onClick={() => setUpdateVisible(false)}>cancel</button>
            </form>
        </div>
    )
}

export default UpdateForm