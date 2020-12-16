const WarriorForm = ({handleCreate, name, setNewName}) => {
    return(
        <div>
            <h3>Create new warrior:</h3>
            <form onSubmit={handleCreate}>
                <div>
                    Name: <input id="title" type="text" value={name} onChange={({target}) =>
                    setNewName(target.value)}/>
                </div>
                <button id="create-button" type="submit">add</button>
            </form>
        </div>
    )
}

export default WarriorForm