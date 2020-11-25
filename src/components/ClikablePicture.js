import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: this.props.img,
  };

  changePic = () => {
    let noGlasses = this.props.img;
    let glasses = this.props.imgClicked;

    let newImg;
    if (this.state.img === noGlasses) {
      newImg = glasses;
    } else {
      newImg = noGlasses;
    }

    this.setState({
      img: newImg,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.img} onClick={this.changePic} />
      </div>
    );
  }
}

export default ClickablePicture;
