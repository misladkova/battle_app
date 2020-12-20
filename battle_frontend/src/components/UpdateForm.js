import React from "react";

const UpdateForm = ({updatedName, setUpdatedName, handleChange}) => {
    return(
        <div>
            <h4>Update the warrior:</h4>
            <form>
                <div>
                    New name: <input type="text" value={updatedName} onChange={({target}) =>
                    setUpdatedName(target.value)}/>
                </div>
                <button id="update-button" onClick={handleChange}>change</button>
            </form>
        </div>
    )
}

export default UpdateForm