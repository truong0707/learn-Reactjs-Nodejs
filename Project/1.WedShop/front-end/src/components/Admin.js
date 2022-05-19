import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


import React from 'react'

export default function Admin() {
    return (
        <div style={{height:'500px', marginTop:'60px', background: 'pink'}}>
                <ul>
                    <li>
                        <Link to='/admin/category/search'>Search</Link>
                    </li>

                    <li>
                        <Link to='/admin/category/add'>Home</Link>
                    </li>
                    <li>
                        <Link to='/admin/category/add'>Home</Link>
                    </li>
                </ul>

            <Routes>
                <Route exact path="/admin/category/search" element={'Search'} />
                <Route exact path="/admin/category/add" element={'add'} />
            </Routes>

        </div >
    )
}
