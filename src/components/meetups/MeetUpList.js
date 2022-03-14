import React, { useEffect, useState } from "react"
import { getMeetUps } from "./MeetUpManager.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './MeetUps.css';

export const MeetUpList = (props) => {
    const [meetUps, setMeetUps] = useState([])
    const history = useHistory()

    useEffect(() => {
        getMeetUps().then(data => setMeetUps(data))
    }, [])

    return (
        <article className="meetUps">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/meetUps/new" })
                }}
            >Register New MeetUp</button>
            {
                meetUps.map(meetUp => {
                    return <div class="row" key={`meetUp--${meetUp.id}`} className="meetUp">
                        <div class="column">
                        <div class="card" className="meetUp__game">{meetUp.game?.name}</div>
                        <div className="meetUp__room"> Playing in Room: {meetUp.room?.name}</div>
                        <div className="meetUp__game_system">{meetUp.game_system?.name} </div>
                        <button>Join</button>
                        </div>
                    </div>
                })
            }
        </article>
    )
}