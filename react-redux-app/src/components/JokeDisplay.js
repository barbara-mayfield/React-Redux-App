import React from 'react'

export default function JokeDisplay(props) {
    console.log(props, "<- Jokedisp props")
    return (
        <div className="display">
        <div className="joke"><p>{props.joke}</p></div>
        </div>
    )
}