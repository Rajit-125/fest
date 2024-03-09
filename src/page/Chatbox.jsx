import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
    this.socket = new WebSocket('ws://localhost:8000'); 
  }

  componentDidMount() {
    this.socket.addEventListener('open', () => {
      console.log('WebSocket connection established!');
    });

    this.socket.addEventListener('message', (event) => {
      const receivedMessage = event.data;
      this.setState((prevState) => ({
        messages: [...prevState.messages, receivedMessage],
      }));
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  handleChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleSend = () => {
    if (this.socket.readyState === WebSocket.OPEN && this.state.newMessage.trim() !== '') {
        const newMessage = { content: this.state.newMessage, type: 'sent' };
    
        this.socket.send(this.state.newMessage);
        this.setState((prevState) => ({
          messages: [...prevState.messages, newMessage],
          newMessage: '',
        }));
      }
  };

  render() {
    return (
      <div className=" mx-96 my-96 text-3xl text-black font-bold">
        <div className=" ">
          {this.state.messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <div className=" ">
          <input
            className=' w-72 rounded-2xl'
            type="text"
            value={this.state.newMessage}
            onChange={this.handleChange}
            placeholder=" Type a message..."
          />
          <button onClick={this.handleSend} className=' my-5 text-white bg-blue-400 rounded-2xl w-32 hover:text-black'>Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;
