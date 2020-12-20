import React, {useState, useEffect} from "react";
import warriorsService from "./services/warriors";
import Warrior from "./components/Warrior";
import CreateForm from "./components/CreateForm";
import Duel from "./components/Duel";
import UpdateForm from "./components/UpdateForm";
import Fight from "./components/Fight";

const App = () => {

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

    return (
        <div>
            <h2>Battle</h2>
            <h4>List of warriors:</h4>
            {warriors.map(warrior => <Warrior key={warrior.id} warrior={warrior} warriors={warriors} setWarriors={setWarriors}
            setOptions={setOptions} setUpId={setUpId}/>)}
            <CreateForm setWarriors={setWarriors} warriors={warriors} setOptions={setOptions}/>
            <Fight options={options} setDuels={setDuels}/>
            <h4>History of battles:</h4>
            {duels.map(duel=> <Duel duel={duel}/>)}
            <UpdateForm warriors={warriors} setWarriors={setWarriors} upId={upId}/>
        </div>
    )
}

export default App
