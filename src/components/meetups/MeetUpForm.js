import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createMeetUp, getGames, getGameSystems, getRooms } from './MeetUpManager.js'


export const MeetUpForm = () => {
    const history = useHistory()
    const [games, setGames] = useState([])
    const [rooms, setRooms] = useState([])
    const [game_systems, setGameSystems] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentMeetUp, setCurrentMeetUp] = useState({
        game: 0,
        room: 0,
        game_system: 0
    })

    useEffect(() => {
        // TODO: Get the game types, then set the state
        getGames().then(data => setGames(data))
    }, [])
    useEffect(() => {
        // TODO: Get the game types, then set the state
        getRooms().then(data => setRooms(data))
    }, [])
    useEffect(() => {
        // TODO: Get the game types, then set the state
        getGameSystems().then(data => setGameSystems(data))
    }, [])

    const changeMeetUpState = (domEvent) => {
        // TODO: Complete the onChange function
        domEvent.preventDefault()
        const copy = {...currentMeetUp}
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentMeetUp(copy)
    }

    return (
        <form className="meetUpForm">
            <h2 className="meetUpForm__title"> New MeetUp</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="game">Game : </label>
                    <select name="game" required className="form-control"
                        value={currentMeetUp.game}
                        onChange={changeMeetUpState}>
                    <option value="0">Which game? </option>
                    {
                        games.map(g => (
                            <option key={g.id} value={g.id}>{g.name}</option>
                        ))
                    }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="room">Room : </label>
                    <select name="room" required className="form-control"
                        value={currentMeetUp.room}
                        onChange={changeMeetUpState}>
                    <option value="0">Which room? </option>
                    {
                        rooms.map(r => (
                            <option key={r.id} value={r.id}>{r.name}</option>
                        ))
                    }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="game_system">Game System : </label>
                    <select name="game_system" required className="form-control"
                        value={currentMeetUp.game_system}
                        onChange={changeMeetUpState}>
                    <option value="0">Which system? </option>
                    {
                        game_systems.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))
                    }
                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const meetUp = {
                        game: parseInt(currentMeetUp.game),
                        room: parseInt(currentMeetUp.room),
                        game_system: parseInt(currentMeetUp.game_system),
                    }

                    // Send POST request to your API
                    createMeetUp(meetUp)
                        .then(() => history.push("/meetUps"))
                }}
                className="btn btn-primary">Send to Mom/Dad!</button>
        </form>
    )
}