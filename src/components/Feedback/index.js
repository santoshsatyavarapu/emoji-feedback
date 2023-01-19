// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedBackStatus: false}

  giveFeedBackMethod = () => {
    this.setState({feedBackStatus: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {feedBackStatus} = this.state

    return (
      <div className="large-container">
        <div className="small-container">
          {!feedBackStatus && (
            <div>
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="img-container">
                {emojis.map(emoji => (
                  <li key={emoji.id}>
                    <img
                      src={emoji.imageUrl}
                      alt={emoji.name}
                      onClick={this.giveFeedBackMethod}
                    />
                    <p>{emoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {feedBackStatus && (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" />
              <h1>Thank You!</h1>
              <p>
                we will use feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
