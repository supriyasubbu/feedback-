import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  feedBackButt = () => this.setState({isFeedback: true})

  feedbackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feed-back-container">
        <h1 className="heading">
          How Satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(each => (
            <li key={each.id}>
              <button onClick={this.feedBackButt} type="button">
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="emoji-img"
                />
                <br />
                <span>{each.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="heart-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="app-container">
        <div className="feed-card">
          {isFeedback ? this.thankYouScreen() : this.feedbackScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
