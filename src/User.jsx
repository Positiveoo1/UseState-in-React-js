import React from 'react'

function User(props) {
    return (
        <>
        
            <h1>Hello {props.name}</h1>
            <h1>He is {props.experience}</h1>
        </>
    )
}

export default User