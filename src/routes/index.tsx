import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Reels from "../pages/Reels";

type route = {
    path: string,
    component: React.ComponentType<any>
}

const publicRoutes: route[] = [
    {path: '/', component: Home},
    {path: '/reels', component: Reels},
    {path: '/profile', component: Profile}
]

const privateRoutes: route[] = [
]

export {publicRoutes, privateRoutes}