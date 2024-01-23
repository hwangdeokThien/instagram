import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Reels from "../pages/Reels";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DetailUser from "../pages/DetailUser";

type route = {
    path: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any> | null | undefined;
};

const publicRoutes: route[] = [
    { path: "/", component: Home },
    { path: "/reels", component: Reels },
    { path: "/profile", component: Profile },
    { path: "/login", component: Login, layout: null },
    { path: "/register", component: Register, layout: null },
    { path: "/detailuser", component: DetailUser },
];

const privateRoutes: route[] = [];

export { publicRoutes, privateRoutes };
