import React, { useEffect, useState } from "react"
import { getMeetUps, joinMeetUp, leaveMeetUp } from "./MeetUpManager.js"
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
                    return <div class="row" key={`meetUp--${meetUp.id}`}>
                        <div class="column">
                        <div class="card" >{meetUp.game?.name}</div>
                        <div className="meetUp__room"> Playing in Room: {meetUp.room?.name}</div>
                        <div className="meetUp__game_system">{meetUp.game_system?.name} </div>
                        {
                            meetUp.joined ?
                            <button onClick={() => {leaveMeetUp(meetUp.id)
                                .then(getMeetUps)
                                .then(res => setMeetUps(res))
                            }}>Leave</button>
                            : <button onClick={() => {joinMeetUp(meetUp.id)
                                .then(getMeetUps)
                                .then(res => setMeetUps(res))
                            }}>Join</button>
                        }
                        </div>
                    </div>
                })
            }
        </article>
    )
}