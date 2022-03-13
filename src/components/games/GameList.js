import React, { useEffect, useState } from "react"
import { getGames } from "./GameManager.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Games.css';

export const GameList = (props) => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            {
                games.map(game => {
                    return <div class="row" key={`game--${game.id}`} className="game">
                        <div class="column">
                        <div class="card" className="game__name">{game.name}</div>
                        <div className="game__kid"> Added by {game.kid?.user?.username}</div>
                        <div className="game__min_age">{game.min_age} yrs+</div>
                        </div>
                    </div>
                })
            }
        </article>
    )
}