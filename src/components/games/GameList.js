import React, { useEffect, useState } from "react"
import { getGames, unFaveGame, faveGame, getKids } from "./GameManager.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Games.css';

export const GameList = (props) => {
    const [games, setGames] = useState([])
    const [kids, setKids] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    useEffect(() => {
        getKids().then(data => setKids(data))
    }, [])


    return (
        <article className="games">
            {
                localStorage.is_staff == "true" ? "" :<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>}
            {
                games.map(game => {
                    return <section><div class="row" key={`game--${game.id}`} >
                        <div class="column">
                        <div class="card" >{game.name}</div>
                        <div className="game__kid"> Added by {game.kid?.user?.username}</div>
                        {/* <div className="game__min_age">{game.min_age} yrs+</div> */}
                        
                        {
                            localStorage.is_staff == "true" ? "" :
                            game.faved ?
                            <button onClick={() => {unFaveGame(game.id)
                                .then(getGames)
                                .then(res => setGames(res))
                            }}>Don't Like!</button>
                            : <button onClick={() => {faveGame(game.id)
                                .then(getGames)
                                .then(res => setGames(res))
                            }}>Like</button>
                        }
                        
                        </div>
                    </div></section>
                })
            }
        </article>
    )
}