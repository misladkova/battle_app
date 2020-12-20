import React, {useState, useEffect} from "react";
import warriorsService from "./services/warriors";
import Warrior from "./components/Warrior";
import WarriorForm from "./components/WarriorForm";
import Duel from "./components/Duel";
import UpdateForm from "./components/UpdateForm";
import Fight from "./components/Fight";

const App = () => {

    const [newName, setNewName] = useState("")
    const [warriors, setWarriors] = useState([])
    const [options, setOptions] = useState([])
    const [duels, setDuels] = useState([])
    const [upId, setUpId] = useState("")

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

        const warriorObj = {name: newName, id: Math.round(Math.random() * 1000000)}
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

    const handleUpdate = async (id) => {
        setUpId(id)
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

    return (
        <div>
            <h2>Battle</h2>
            <h4>List of warriors:</h4>
            {warriors.map(warrior => <Warrior key={warrior.id} warrior={warrior} handleDelete={handleDelete}
                                              handleUpdate={handleUpdate}/>)}
            <WarriorForm name={newName} setNewName={setNewName} handleCreate={handleCreate}/>
            <Fight options={options} setDuels={setDuels}/>
            <h4>History of battles:</h4>
            {duels.map(duel=> <Duel duel={duel}/>)}
            <UpdateForm warriors={warriors} setWarriors={setWarriors} upId={upId}/>
        </div>
    )
}

export default App
