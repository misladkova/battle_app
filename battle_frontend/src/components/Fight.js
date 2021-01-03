import React, {useState} from "react";
import warriorsService from "../services/warriors";

const Fight = ({options, setDuels, setFightVisible}) => {

    const [firstSelect, setFirstSelect] = useState("")
    const [secondSelect, setSecondSelect] = useState("")

    const handleFirstSelect = (event) => {
        const x = event.target.value
        setFirstSelect(x)
    }

    const handleSecondSelect = (event) => {
        const x = event.target.value
        setSecondSelect(x)
    }

    const handleFight = async (id1, id2) => {
        const newWarriorPromise = warriorsService.getBattleServer(id1, id2)
        const response = await newWarriorPromise
        setDuels(response.data)
    }

    return (
        <div>
            <h4>Choose first player:</h4>
            <select className="form-control" value={firstSelect} onChange={handleFirstSelect}>
                {options.map(o => <option value={o.value}>{o.label}</option>)}
            </select>
            <h4>Choose second player:</h4>
            <select className="form-control" value={secondSelect} onChange={handleSecondSelect}>
                {options.map(o => <option value={o.value}>{o.label}</option>)}
            </select>
            <button id="fight" className="btn btn-primary mr-2 mt-2 mb-2" onClick={() =>
                handleFight(firstSelect, secondSelect)}>fight</button>
            <button className="btn btn-secondary mt-2 mb-2" onClick={() => setFightVisible(false)}>cancel</button>
        </div>
    )
}

export default Fight