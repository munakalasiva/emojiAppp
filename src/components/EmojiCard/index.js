import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}

export default EmojiCard
