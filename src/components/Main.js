import React, { useState } from 'react';
import Scoreboard from './Score/Scoreboard';

function Main() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <div>
            <Scoreboard score={score} highScore={highScore} />
            {/* <CardGrid /> */}
        </div>
    );
}

export default Main;
