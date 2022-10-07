import React from 'react'

const menu = () => {
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <link to="/">inicio</link>
                </li>
                <li>
                    <link to="/login">login</link>
                </li>
                <li>
                    <link to="/admin">admin</link>
                </li>
            </ul>
        </nav>
    </div>
    )
}
export default menu