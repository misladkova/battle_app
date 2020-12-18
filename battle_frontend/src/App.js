import React, {useState, useEffect} from "react";
import warriorsService from "./services/warriors";
import Warrior from "./components/Warrior";
import WarriorForm from "./components/WarriorForm";

const App = () => {

    const [newName, setNewName] = useState("")
    const [warriors, setWarriors] = useState([])

    async function fetchData(){
        const wars = await warriorsService.getWarriorsServer()
        setWarriors(wars.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleCreate = async (event) => {
        event.preventDefault()
        console.log("aaa")

        const warriorObj = {name: newName, id: warriors.length + 1}
        console.log("w", warriorObj)
        const newWarriorPromise = warriorsService.addWarriorServer(warriorObj)
        setNewName("")
        const response = await newWarriorPromise
        console.log("r", response)
        const newWarriors = warriors.concat(response.data)
        console.log("l", newWarriors)
        setWarriors(newWarriors)
    }

    const handleUpdate = async () => {

    }

    const handleDelete = async (id) => {
        const newWarriorPromise = warriorsService.deleteWarriorServer(id)
        const response = await newWarriorPromise
        console.log(response)
        const newWarriors = warriors.filter(x => x.id !== id)
        setWarriors(newWarriors)
    }
    console.log("warriorsssss:", warriors)
    return (
        <div>
            <h2>Battle</h2>
            <h4>List of warriors:</h4>
            {warriors.map(warrior => <Warrior key={warrior.id} warrior={warrior} handleDelete={handleDelete}/>)}
            <WarriorForm name={newName} setNewName={setNewName} handleCreate={handleCreate}/>
        </div>
    )
}

export default App;
