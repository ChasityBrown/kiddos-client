import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./games/GameList"
import { GameForm } from "./games/GameForm"
import { RoomList } from "./rooms/RoomList"
import { MeetUpList } from "./meetups/MeetUpList"
import { AdminList } from "./admins/AdminList"
import { UpdateAdminForm } from "./admins/UpdateAdminForm"
import { MeetUpForm } from "./meetups/MeetUpForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/games/new">
                <GameForm />
            </Route>
            {/* <Route exact path="/games/:gameId(\d+)/update">
                <UpdateGameForm />
            </Route> */}
            <Route exact path="/rooms">
                <RoomList />
            </Route>
            {/* <Route exact path="/rooms/new">
                <RoomForm />
            </Route> */}
            {/* <Route exact path="/rooms/:roomId(\d+)/update">
                <UpdateRoomForm />
            </Route> */}
            <Route exact path="/meetUps">
                <MeetUpList />
            </Route>
            <Route exact path="/meetUps/new">
                <MeetUpForm />
            </Route>
            {/* <Route exact path="/meetUps/:meetUpId(\d+)/update">
                <UpdateMeetUpForm />
            </Route> */}
            <Route exact path="/admins">
                <AdminList />
            </Route>
            <Route exact path="/admins/update">
                <UpdateAdminForm />
            </Route>

        </main>
    </>
}
