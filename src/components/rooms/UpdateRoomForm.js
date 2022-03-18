import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { updateRoom, getRoomById} from './RoomManager.js'

export const UpdateRoomForm = () => {
    const history = useHistory()
    const { roomId } = useParams()
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentRoom, setCurrentRoom] = useState({
        name: ""
    })

    useEffect(() => {
        // TODO: Get the room types, then set the state
        getRoomById(roomId)
        .then(data => setCurrentRoom({
            name: data.name
        }))
    }, [roomId])

    const changeRoomState = (domRoom) => {
        // TODO: Complete the onChange function002
        domRoom.preventDefault()
        const copy = {...currentRoom}
        let key = domRoom.target.name
        copy[key] = domRoom.target.value
        setCurrentRoom(copy)
    }

    return (
        <form className="roomForm">
            <h2 className="roomForm__game">Update Room</h2>
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
                    updateRoom(room, roomId)
                        .then(() => history.push("/rooms"))
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}