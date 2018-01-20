import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import './App.css';
import EmojiCanvas from './EmojiCanvas';
import { Emoji, Picker } from 'emoji-mart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { emojis: [] };
  }
  addEmoji(emoji){
    const currentEmojis = this.state.emojis;
    this.setState({ emojis: currentEmojis.concat(emoji)});
  }
  clearEmojis(){
    this.setState({ emojis: [] });
  }
  render() {
    return (
      <div>
        <Picker {...this.state} showPreview="" native="true" onClick={this.addEmoji.bind(this)}/>
        <ul>
          {
            this.state.emojis.map((emoji, index) => {
              return <li style={{display: "inline"}} key={index} ><Emoji native="true" emoji={emoji} /></li>
            })
          }
        </ul>
        <EmojiCanvas
          emojis={this.state.emojis}
          onClearEmojis={this.clearEmojis.bind(this)}
          />
      </div>
    );
  }
}

export default App;
