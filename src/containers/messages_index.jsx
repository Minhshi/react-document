import React from "react"
import Message from "../components/message"

class MessagesIndex extends React.Component {
  static defaultProps = {
    messages: [
    {
      "subject": "Contract",
      "content": "I send you my contract.",
      "attachments": ["https://res.cloudinary.com/dmadox5xe/image/upload/v1549287897/ybufgp3hmx3iunjtuft3.jpg", "https://res.cloudinary.com/dmadox5xe/image/upload/v1549287897/ybufgp3hmx3iunjtuft3.jpg"]
    },
    {
      "subject": "Other",
      "content": "I need to talk to you.",
      "attachments": ["https://res.cloudinary.com/dmadox5xe/image/upload/v1549287897/ybufgp3hmx3iunjtuft3.jpg"]
    },
    ]
  }

  render() {
    return (
      <div className="messages-container">
      <div className="messages-title">
      <h4>Your Messages</h4>
      </div>
      <div className="messages-content">
      {this.props.messages.map((message) => {
        return <Message message={message} key={message.subject}/>
      })}
      </div>
      </div>
      )
  }
}

export default MessagesIndex
