import {Component} from 'react'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

import Navbar from '../NavBar'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, isGameInProgress: true}

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props

    const isWon = clickedEmojisList.length === emojisList.length
    const score = clickedEmojisList.length

    return (
      <WinOrLoseCard isWon={isWon} score={score} playAgain={this.resetGame} />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisCard = () => {
    const shuffledEmojis = this.getShuffledEmojiList()

    return (
      <ul className="ul">
        {shuffledEmojis.map(eachObject => (
          <EmojiCard
            key={eachObject.id}
            emojiDetails={eachObject}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameInProgress, clickedEmojisList} = this.state

    return (
      <div className="bg-con">
        <Navbar
          score={clickedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div>
          {isGameInProgress ? this.renderEmojisCard() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
