import React, {useState, useEffect} from "react";
import warriorsService from "./services/warriors";
import CreateForm from "./components/CreateForm";
import Duel from "./components/Duel";
import UpdateForm from "./components/UpdateForm";
import Fight from "./components/Fight";
import Warriors from "./components/Warriors";

const App = () => {

    const [warriors, setWarriors] = useState([])
    const [duels, setDuels] = useState([])
    const [upId, setUpId] = useState("")
    const [createVisible, setCreateVisible] = useState(false)
    const [updateVisible, setUpdateVisible] = useState(false)
    const [fightVisible, setFightVisible] = useState(false)

    const options = warriors.map(x => ({
        "value": x.id,
        "label": x.name
    }))

    async function fetchData() {
        const wars = await warriorsService.getWarriorsServer()
        setWarriors(wars.data)
    }

    async function fetchDuels() {
        const battles = await warriorsService.getAllDuelsServer()
        setDuels(battles.data)
    }

    useEffect(() => {
        fetchData()
        fetchDuels()
    }, [])

    const showBattle = () =>{
        if(warriors.length<2){
            window.alert("At least 2 warriors needed")
        }else {
            setFightVisible(true)
        }
    }

    return (
        <div className="container">
            <h2>Battle</h2>
            <h4>List of warriors:</h4>
            <Warriors warriors={warriors} setWarriors={setWarriors} setUpId={setUpId} setUpdateVisible={setUpdateVisible}/>
            <button className="btn btn-outline-primary btn-lg mt-2 mb-4 ml-2 mr-2" onClick={() => setCreateVisible(true)}
            >add new warrior</button>
            {createVisible ? <CreateForm setWarriors={setWarriors} warriors={warriors} setCreateVisible={setCreateVisible}/> : ''}
            {updateVisible ? <UpdateForm warriors={warriors} setWarriors={setWarriors} upId={upId} setUpdateVisible=
                {setUpdateVisible}/> : ''}
            <button className="btn btn-outline-primary btn-lg mt-2 mb-4" onClick={showBattle}>
                play a battle</button>
            {fightVisible ? <Fight options={options} setDuels={setDuels} setFightVisible={setFightVisible}/> : ''}
            <h4>History of battles:</h4>
            {duels.map(duel => <Duel key={duel.id} duel={duel}/>)}
        </div>
    )
}

export default App
