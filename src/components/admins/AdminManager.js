export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const getGameTypes = () => {
    return fetch("http://localhost:8000/gametypes", { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}
export const getGameById = (id) => {
    return fetch(`http://localhost:8000/games/${id}`,{
    headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
    .then(res => res.json())
}
export const updateGame = (game, id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
     })
}
export const deleteGame = (game, id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    })
        .then(getGames)
}
export const getMeetUps = () => {
    return fetch("http://localhost:8000/meetUps", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const getMeetUpById = (id) => {
    return fetch(`http://localhost:8000/meetUps/${id}`,{
    headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
    .then(res => res.json())
}
export const updateMeetUp = (meetUp, id) => {
    return fetch(`http://localhost:8000/meetUps/${id}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(meetUp)
     })
}
export const deleteMeetUp = (meetUp, id) => {
    return fetch(`http://localhost:8000/meetUps/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(meetUp)
    })
        .then(getMeetUps)
}
export const getRooms = () => {
    return fetch("http://localhost:8000/rooms", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const createRoom = (room) => {
    return fetch("http://localhost:8000/rooms", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(room)
     })
        .then(res => res.json())
}
export const getRoomById = (id) => {
    return fetch(`http://localhost:8000/rooms/${id}`,{
    headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
    .then(res => res.json())
}
export const updateRoom = (room, id) => {
    return fetch(`http://localhost:8000/rooms/${id}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(room)
     })
}
export const deleteRoom = (room, id) => {
    return fetch(`http://localhost:8000/rooms/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(room)
    })
        .then(getRooms)
}