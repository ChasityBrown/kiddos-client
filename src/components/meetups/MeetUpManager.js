export const getMeetUps = () => {
    return fetch("http://localhost:8000/meetUps", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const createMeetUp = (meetUp) => {
    return fetch("http://localhost:8000/meetUps", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(meetUp)
     })
        .then(res => res.json())
}
export const getMeetUpTypes = () => {
    return fetch("http://localhost:8000/meetUptypes", { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
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
export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const getGameSystems = () => {
    return fetch("http://localhost:8000/gamesystems", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const getRooms = () => {
    return fetch("http://localhost:8000/rooms", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}