import React, { useEffect, useState } from "react"
import { getParentGames, getParentMeetUps, getParentRooms } from "./AdminManager.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const AdminList = (props) => {
    const [games, setGames] = useState([])
    const [meetUps, setMeetUps] = useState([])
    const [rooms, setRooms] = useState([])
    const history = useHistory()

    useEffect(() => {
        getParentGames().then(data => setGames(data))
    }, [])
    useEffect(() => {
        getParentMeetUps().then(data => setMeetUps(data))
    }, [])
    useEffect(() => {
        getParentRooms().then(data => setRooms(data))
    }, [])

    return (
        <article className="games">
            <h2>Games</h2>
            {
                games.map(game => {
                    return <div key={`game--${game.id}`} className="admin">
                        <ul>
                            <li className="admin__name">{game.name} Approved: {game.approved ? "true" : "false"}</li>
                        </ul>
                        <button onClick={() => {
                            history.push({ pathname: `/admins/${game.id}/update` })
                        }}>Make Changes</button>
                    </div>

                })

            }
            <h2>Rooms</h2>
            {
                rooms.map(room => {
                    return <div key={`room--${room.id}`} className="admin">
                        <ul>
                            <li className="admin__name">{room.name}</li>
                        </ul>
                    </div>
                })
            }
            <h2>Meet Ups</h2>
            {
                meetUps.map(meetUp => {
                    return <div key={`meetUp--${meetUp.id}`} className="admin">
                        <ul>
                            <li className="admin__name">{meetUp.game?.name} Approved: {meetUp.approved ? "true" : "false"}</li>
                        </ul>
                        <button onClick={() => {
                            history.push({ pathname: `/admins/${meetUp.id}/update` })
                        }}>Make Changes</button>
                    </div>
                })
            }
            
        </article>
    )
}