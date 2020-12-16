import React from "react";

const Warrior = ({name, handleUpdate, handleDelete}) => {
    return(
        <li>{name}<button onClick={handleUpdate}>update</button><button onClick={handleDelete}>delete</button></li>
    )
}

export default Warrior