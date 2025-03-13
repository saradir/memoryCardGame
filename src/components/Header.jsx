export function Header({score, highScore, onNewGameClick}){
    return(
        <div className="header">
            <div className="left-header">
                <h1>Pokemon Memory Card Game</h1>
                <p>
                    Get points by clicking on an image but don't click on any more than once!
                </p>
            </div>
            <div className="right-header>">
                <div className="scoreboard">
                    <p>Score:{score}</p>
                    <p>Best Score:{highScore}</p>
                
                </div>
                <button className="new-game-button" onClick={onNewGameClick}>New Game</button>
            </div>


        </div>
    )
}