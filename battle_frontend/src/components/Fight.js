import Select from "react-select";
import React, {useState} from "react";
import warriorsService from "../services/warriors";

const Fight = ({options, setDuels, setFightVisible}) => {

    const [firstSelect, setFirstSelect] = useState("")
    const [secondSelect, setSecondSelect] = useState("")

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
        setDuels(response.data)
    }

    return (
        <div>
            <h4>Choose first player:</h4>
            <Select options={options} onChange={handleFirstSelect}/>
            <h4>Choose second player:</h4>
            <Select options={options} onChange={handleSecondSelect}/>
            <button onClick={() => handleFight(firstSelect, secondSelect)}>fight</button>
            <button onClick={() => setFightVisible(false)}>cancel</button>
        </div>
    )
}

export default Fight