import React, { useState } from 'react';

function Scoreboard(props) {
    return (
        <div className='flex justify-around text-white'>
            <div>Score: {props.score}</div>
            <div>High score: {props.highScore}</div>
        </div>
    );
}

export default Scoreboard;
