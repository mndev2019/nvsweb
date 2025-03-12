// import React from 'react'

import { Outlet } from "react-router-dom"

const Authlayout = () => {
    return (
        <div>
            <main>
                {<Outlet />}
            </main>
        </div>
    )
}

export default Authlayout
