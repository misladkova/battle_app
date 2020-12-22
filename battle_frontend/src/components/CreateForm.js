import warriorsService from "../services/warriors";
import React, {useState} from "react";

const CreateForm = ({warriors, setWarriors, setCreateVisible}) => {

    const [newName, setNewName] = useState("")
    const [newFile, setNewFile] = useState("")

    const handleCreate = async (event) => {
        event.preventDefault()

        const warriorObj = {name: newName, file: newFile}
        const newWarriorPromise = warriorsService.addWarriorServer(warriorObj)
        setNewName("")
        setNewFile("")
        const response = await newWarriorPromise
        const newWarriors = warriors.concat(response.data)
        setWarriors(newWarriors)
    }

    const fileOnChange = (e) => {
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
        console.log("loaded", x)
        setNewFile(x)
    }

    return(
        <div>
            <h3>Create new warrior:</h3>
            <form onSubmit={handleCreate}>
                <div>
                    Name: <input id="title" type="text" value={newName} onChange={({target}) =>
                    setNewName(target.value)}/>
                    Picture: <input id="image" type="file" accept=".jpeg, .png, .jpg" onChange={fileOnChange}/>
                </div>
                <button id="create-button" type="submit">add</button> <button onClick={() => setCreateVisible(false)}>cancel</button>
            </form>
        </div>
    )
}

export default CreateForm