import React, {useState, useEffect} from "react";
import warriorsService from "./services/warriors";
import Warrior from "./components/Warrior";
import WarriorForm from "./components/WarriorForm";
import Select from "react-select";
import Duel from "./components/Duel";

const App = () => {

    const [newName, setNewName] = useState("")
    const [warriors, setWarriors] = useState([])
    const [options, setOptions] = useState([])
    const [firstSelect, setFirstSelect] = useState("")
    const [secondSelect, setSecondSelect] = useState("")
    const [duels, setDuels] = useState([])

    async function fetchData() {
        const wars = await warriorsService.getWarriorsServer()
        setWarriors(wars.data)
        const opt = wars.data.map(x => ({
            "value": x.id,
            "label": x.name
        }))
        setOptions(opt)
    }

    async function fetchDuels(){
        const battles = await warriorsService.getAllDuelsServer()
        setDuels(battles.data)
    }

    useEffect(() => {
        fetchData()
        fetchDuels()
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
        console.log("dddddd", id)
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
        const x = event.label
        setFirstSelect(x.toString())
    }

    const handleSecondSelect = (event) => {
        const x = event.label
        setSecondSelect(x.toString())
    }

    const handleFight = async (id1, id2) => {
        const newWarriorPromise = warriorsService.getBattleServer(id1, id2)
        const response = await newWarriorPromise
        console.log("fjhfv", newWarriorPromise)
        console.log("dds", response.data)
        setDuels(response.data)
    }

    console.log("firs", firstSelect)
    console.log("seco", secondSelect)

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
            <button onClick={() => handleFight(firstSelect, secondSelect)}>fight</button>
            <h4>History of battles:</h4>
            {duels.map(duel=> <Duel duel={duel}/>)}
        </div>
    )
}

export default App
