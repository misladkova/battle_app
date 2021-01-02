import React, {useState} from "react";
import warriorsService from "../services/warriors";

const UpdateForm = ({warriors, setWarriors, upId, setUpdateVisible}) => {

    const [updatedName, setUpdatedName] = useState("")
    const [updatedFile, setUpdatedFile] = useState("")

    const handleChange = async (event) => {
        event.preventDefault()

        const x = warriors.find(a=>a.id===upId)
        const updatedWarriorFields = {};
        if(updatedFile!==""){
            updatedWarriorFields.file = updatedFile;
        }
        if(updatedName===""){
            updatedWarriorFields.name = x.name;
        } else {
            updatedWarriorFields.name = updatedName;
        }
        const newWarriorPromise = warriorsService.updateWarriorServer(upId, updatedWarriorFields)
        const response = await newWarriorPromise
        const newWarriors = warriors.map(w=> w.id !== upId ? w: response.data)
        setWarriors(newWarriors)
        setUpdatedName("")
        setUpdatedFile("")
        setUpdateVisible(false);
    }

    const fileChange = (e) => {
        let file = e.target.files[0]

        if(file){
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsBinaryString(file)
        }
    }

    const handleReaderLoaded = (readerEvent) => {
        let binaryString = readerEvent.target.result
        const x = btoa(binaryString)
        setUpdatedFile(x)
    }

    return(
        <div>
            <h4>Update the warrior:</h4>
            <form onSubmit={handleChange}>
                <div>
                    New name: <input type="text" value={updatedName} onChange={({target}) =>
                    setUpdatedName(target.value)}/>
                    New file: <input type="file" accept=".jpeg, .png, .jpg" onChange={fileChange}/>
                </div>
                <button className="btn btn-primary mr-1 mt-2 mb-2" id="update-button">change</button>
                <button className="btn btn-secondary mt-2 mb-2" onClick={() => setUpdateVisible(false)}>cancel</button>
            </form>
        </div>
    )
}

export default UpdateForm