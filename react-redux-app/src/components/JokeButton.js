import React from 'react'

const JokeButton = (props) => {
    return (
        <div>
            <button onClick={() => props.handleClick}>New Joke</button>
        </div>
    )
}

export default JokeButton