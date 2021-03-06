import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import {getParentGameById, updateGame } from './AdminManager.js'


export const UpdateAdminForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        name: "",
        approved: false,
        min_age: 0
    })

    useEffect(() => {
        // TODO: Get the game types, then set the state
        getParentGameById(gameId)
        .then(data => setCurrentGame({
            name: data.name,
            approved: data.approved,
            min_age: data.min_age}))
    }, [gameId])

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
            <h2 className="gameForm__min_age">Update Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Game Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentGame.name}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="min_age">Min age: </label>
                    <input type="text" name="min_age" required autoFocus className="form-control"
                        value={currentGame.min_age}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="approved">Approved: </label>
                    <input type="text" name="approved" required autoFocus className="form-control"
                        value={currentGame.approved}
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
                        min_age: parseInt(currentGame.min_age),
                        approved: currentGame.approved,
                        name: currentGame.name
                    }

                    // Send POST request to your API
                    updateGame(game, gameId)
                        .then(() => history.push("/admins"))
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}