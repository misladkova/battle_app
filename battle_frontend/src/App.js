import React, {useState, useEffect} from "react";
import warriorsService from "./services/warriors";
import Warrior from "./components/Warrior";
import WarriorForm from "./components/WarriorForm";
import Select from "react-select";

const App = () => {

    const [newName, setNewName] = useState("")
    const [warriors, setWarriors] = useState([])
    const [options, setOptions] = useState([])
    const [firstSelect, setFirstSelect] = useState("")
    const [secondSelect, setSecondSelect] = useState("")

    async function fetchData() {
        const wars = await warriorsService.getWarriorsServer()
        setWarriors(wars.data)
        const opt = wars.data.map(x => ({
            "value": x.id,
            "label": x.name
        }))
        setOptions(opt)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleCreate = async (event) => {
        event.preventDefault()
        console.log("aaa")

        const warriorObj = {name: newName, id: warriors.length + 1}
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

    const handleUpdate = async () => {
    }

    const handleDelete = async (id) => {
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

    const handleFirstSelect = (event) => {
        setFirstSelect(event.value)
    }

    const handleSecondSelect = (event) => {
        setSecondSelect(event.value)
    }

    const handleFight = () => {

    }

    return (
        <div>
            <h2>Battle</h2>
            <h4>List of warriors:</h4>
            {warriors.map(warrior => <Warrior key={warrior.id} warrior={warrior} handleDelete={handleDelete}
                                              handleUpdate={handleUpdate}/>)}
            <WarriorForm name={newName} setNewName={setNewName} handleCreate={handleCreate}/>
            <h4>Choose first player:</h4>
            <Select options={options} onChange={handleFirstSelect}/>
            <h4>Choose second player:</h4>
            <Select options={options} onChange={handleSecondSelect}/>
            <button onClick={handleFight}>fight</button>
        </div>
    )
}

export default App;
