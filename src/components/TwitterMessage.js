import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    if (e.target.value.length <= this.props.maxChars) {
      this.setState({
      message: e.target.value
    })
    }
  }

  showCharsLeft = (charactersLeft) => {
      return (
        <div>
          {charactersLeft}
        </div>
      )
  }

  render() {
    let charactersLeft = this.props.maxChars- this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name = "message" value = {this.state.message} onChange= {this.handleChange}/>
        <p>
          {charactersLeft > 0? this.showCharsLeft(charactersLeft) : "no characters left"}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
