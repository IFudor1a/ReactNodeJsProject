import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {publicRoutes} from "./Routes";

const AppRouter = () => {
    return (
        <Routes>
            {
                publicRoutes && publicRoutes.map(route => (
                    <Route path={route.path} element={route.element}/>
                ))
            }
        </Routes>
    )
}
export default AppRouter