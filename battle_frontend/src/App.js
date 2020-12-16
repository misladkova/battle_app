import React, {useState} from "react";
import warriorsService from "./services/warriors";
import Warrior from "./components/Warrior";
import WarriorForm from "./components/WarriorForm";

const App = () => {

    const [newName, setNewName] = useState("")
    const [warriors, setWarriors] = useState([])

    const handleCreate = async (event) => {
        event.preventDefault()

        const warriorObj = {name: newName, id: warriors.length + 1}
        const newWarriorPromise = warriorsService.addWarriorServer(warriorObj)
        setNewName("")
        const response = await newWarriorPromise
        const newWarriors = warriors.concat(response)
        setWarriors(newWarriors)
    }

    return (
        <div>
            <h2>Battle</h2>
            <h4>List of warriors:</h4>
            {warriors.map(warrior=><Warrior name={newName}/>)}
            <WarriorForm name={newName} setNewName={setNewName} handleCreate={handleCreate}/>
        </div>
    )
}

export default App;
