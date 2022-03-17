import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createGame } from './GameManager.js'


export const GameForm = () => {
    const history = useHistory()
    // const [kids, setKids] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        name: "",
        kid: 0
    })

    // useEffect(() => {
    //     // TODO: Get the game types, then set the state
    //     getGameTypes().then(data => setGameTypes(data))
    // }, [])

    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        domEvent.preventDefault()
        const copy = {...currentGame}
        let key = domEvent.target.name
        copy[key] = domEvent.target.value
        setCurrentGame(copy)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentGame.name}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        name: currentGame.name,
                        kid: parseInt(currentGame.kid)
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}