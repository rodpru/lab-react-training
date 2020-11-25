import React from 'react';

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };
  likeFuntion = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.likeFuntion}>Likes: '{this.state.likes}'</button>
      </div>
    );
  }
}

export default LikeButton;
