export function Header({score, highScore, onNewGameClick}){
    return(
        <div class="header">
            <div class="left-header">
                <h1>Pokemon Memory Card Game</h1>
                <p>
                    Get points by clicking on an image but don't click on any more than once!
                </p>
            </div>

            <div class="scoreboard">
                <p>Score:{score}</p>
                <p>Best Score:{highScore}</p>
            
            </div>

            <button class="new-game" onClick={onNewGameClick}>New Game</button>


        </div>
    )
}