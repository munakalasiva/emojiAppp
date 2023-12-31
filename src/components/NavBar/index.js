import './index.css'

const Navbar = props => {
  const {score, topScore, isGameInProgress} = props

  return (
    <div className="nav-item">
      <div className="nav-sty">
        <div className="left-part">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>

        <div>
          {isGameInProgress && (
            <div className="right-part">
              <p>Score: {score}</p>
              <p>Top Score: {topScore}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
