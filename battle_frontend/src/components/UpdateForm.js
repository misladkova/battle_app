import React, {useState} from "react";
import warriorsService from "../services/warriors";

const UpdateForm = ({warriors, setWarriors, upId}) => {

    const [updatedName, setUpdatedName] = useState("")

    const handleChange = async () => {
        const x = warriors.find(a=>a.id===upId)
        const updatedWarrior = {...x, name: updatedName}
        console.log("aaa", updatedName)
        const newWarriorPromise = warriorsService.updateWarriorServer(upId, updatedWarrior)
        console.log("bbb", updatedWarrior)
        const response = await newWarriorPromise
        console.log("ccc", response)
        const newWarriors = warriors.map(w=> w.name!==updatedName ? w: response.data)
        setWarriors(newWarriors)
        setUpdatedName("")
    }
    return(
        <div>
            <h4>Update the warrior:</h4>
            <form>
                <div>
                    New name: <input type="text" value={updatedName} onChange={({target}) =>
                    setUpdatedName(target.value)}/>
                </div>
                <button id="update-button" onClick={handleChange}>change</button>
            </form>
        </div>
    )
}

export default UpdateForm