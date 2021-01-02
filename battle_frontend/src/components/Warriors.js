import Warrior from "./Warrior";
import React from "react";

const Warriors = ({warriors, setWarriors, setUpdateVisible, setUpId}) => {
    // https://stackoverflow.com/questions/62880615/how-do-i-map-for-every-two-elements-for-react
    const rows = warriors.reduce(function (rows, key, index) {
        return (index % 3 === 0 ? rows.push([key])
            : rows[rows.length-1].push(key)) && rows;
    }, []);
    return (
        <div className="mt-4">
            {rows.map(row => (
                <div className="row mt-3 mb-3">
                    {row.map(warrior => <Warrior key={warrior.id} warrior={warrior} warriors={warriors}
                                                     setWarriors={setWarriors} setUpdateVisible={setUpdateVisible}
                                                     setUpId={setUpId}/>)}
                </div>
            )) }
        </div>
    )
}

export default Warriors