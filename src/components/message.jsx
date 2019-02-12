import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div className="message-container">
        <div className="message-subject">{this.props.message.subject}</div>
        <div className="message-content">{this.props.message.content}</div>
        <div className="message-attachment">
          {this.props.message.attachments.map(attachment => {
            return <img src={attachment} alt="" />;
          })}
        </div>
      </div>
    );
  }
}

export default Message;
