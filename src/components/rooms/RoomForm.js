import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createRoom } from './RoomManager.js'


export const RoomForm = () => {
    const history = useHistory()
    // const [kids, setKids] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentRoom, setCurrentRoom] = useState({
        name: ""
    })

    // useEffect(() => {
    //     // TODO: Get the room types, then set the state
    //     getRoomTypes().then(data => setRoomTypes(data))
    // }, [])

    const changeRoomState = (domEvent) => {
        // TODO: Complete the onChange function
        domEvent.preventDefault()
        const copy = {...currentRoom}
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentRoom(copy)
    }

    return (
        <form className="roomForm">
            <h2 className="roomForm__title">Register New Room</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentRoom.name}
                        onChange={changeRoomState}
                    />
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const room = {
                        name: currentRoom.name
                    }

                    // Send POST request to your API
                    createRoom(room)
                        .then(() => history.push("/rooms"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}