import React, { useEffect, useState } from "react"
import { getRooms } from "./RoomManager.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Rooms.css';

export const RoomList = (props) => {
    const [rooms, setRooms] = useState([])
    const history = useHistory()

    useEffect(() => {
        getRooms().then(data => setRooms(data))
    }, [])

    return (
        <article className="rooms">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/rooms/new" })
                }}
            >Register New Room</button>
            {
                rooms.map(room => {
                    return <div class="row" key={`room--${room.id}`} className="room">
                        <div class="column">
                        <div class="card" className="room__name">{room.name}</div>
                        </div>
                    </div>
                })
            }
        </article>
    )
}