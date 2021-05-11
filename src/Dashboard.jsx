import React from 'react'
import {getUser, removeUserSession} from './Utils/Common'

import ResponseData from './ResponseData'

function Dashboard(props: {history: string[]}) {
    const user = getUser()

    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession()
        props.history.push('/login')
    }

    return (
        <div>
            Welcome {user.username}!<br />
            <br />
            <ResponseData />
            <br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    )
}

export default Dashboard
