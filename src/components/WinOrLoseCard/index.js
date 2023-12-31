import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, playAgain} = props

  const imageUrl = isWon ? wonImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div>
      <div>
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p>{score}/12</p>
        <button onClick={playAgain} type="button">
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
