import React, { Component } from 'react';

class EmojiCanvas extends Component {
  componentDidRender(){
    const canvas = document.getElementById("emojiCanvas");
    const context = canvas.getContext('2d');
    context.scale(2,2);
  }

  startCycle(){
    const canvas = document.getElementById("emojiCanvas");
    const context = canvas.getContext('2d');

    context.font = "100px Arial";
    context.fillText(this.props.emojis[0]["native"], 150, 150);
    this.props.emojis.forEach((emoji, index) => {
      setTimeout(() => {
        context.clearRect(0,0,canvas.width,canvas.height);
        context.fillText(emoji["native"], 150, 150)
      }, 1000 * index);
    })
  }

  saveGif(){
    console.log('save');
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.startCycle.bind(this)}> Start Cycle </button>
        <button type="button" onClick={this.props.onClearEmojis}> Clear Emojis </button>
        <button type="button" onClick={this.saveGif.bind(this)}> Start Cycle </button>


         <canvas id="emojiCanvas" width="400" height="200" style={{border: "1px solid #000000", height: "100px", width: "200px"}}>
        </canvas> 
      </div>
    );
  }
}

export default EmojiCanvas;
