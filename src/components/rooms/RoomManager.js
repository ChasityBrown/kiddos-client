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
export const unFaveRoom = (roomId) => {
    return fetch(`http://localhost:8000/rooms/${roomId}/unfave_room`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(roomId)
    })
}
export const faveRoom = (roomId) => {
    return fetch(`http://localhost:8000/rooms/${roomId}/fave_room`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(roomId)
    })
}