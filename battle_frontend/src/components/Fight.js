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
        id1 = id1 ? id1 : options[0].value;
        id2 = id2 ? id2 : options[0].value;
        if(id1 === id2){
            window.alert("Choose different warriors")
            return;
        }
        const newWarriorPromise = warriorsService.getBattleServer(id1, id2)
        const response = await newWarriorPromise
        setDuels(response.data)
    }

    return (
        <div>
            <h4>Choose first player:</h4>
            <div className="form-group col-md-6">
            <select className="form-control" value={firstSelect} onChange={handleFirstSelect}>
                {options.map((o, idx) => <option key={idx} value={o.value}>{o.label}</option>)}
            </select>
            <h4>Choose second player:</h4>
            <select className="form-control" value={secondSelect} onChange={handleSecondSelect}>
                {options.map((o, idx) => <option key={idx} value={o.value}>{o.label}</option>)}
            </select>
            <button id="fight" className="btn btn-primary mr-2 mt-2 mb-2" onClick={() =>
                handleFight(firstSelect, secondSelect)}>fight</button>
            <button id="cancelFight" className="btn btn-secondary mt-2 mb-2" onClick={() => setFightVisible(false)}>cancel</button>
            </div>
        </div>
    )
}

export default Fight