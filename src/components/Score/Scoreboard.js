function Scoreboard({ currentScore, bestScore }) {
    return (
        <div className='flex justify-around text-white'>
            <div>Score: {currentScore}</div>
            <div>High score: {bestScore}</div>
        </div>
    );
}

export default Scoreboard;
