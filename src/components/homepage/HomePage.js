import React, { useEffect, useState } from "react"
import { getGames, getGameById } from "./HomePageManager.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './HomePage.css';

export const HomePageList = (props) => {
    const [games, setGames] = useState([])
    const [lastGame, setLastGame] = useState({})
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    const lastGameAdded = games[games.length - 1]
    
    return (
        <article className="games">
            {/* {
                games.map(game => {
                    return <section><div class="row" key={`game--${game.id}`} >
                        <div class="column">
                        <div class="card" >{game.name}</div>
                        <div className="game__kid"> Added by {game.kid?.user?.username}</div>
                        </div>
                    </div></section>
                })
            } */}
            {
            
            }
        </article>
    )
}