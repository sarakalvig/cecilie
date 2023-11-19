import React from "react";
import "../App.css";

class Sculpture extends React.Component {
  render() {
    const { url, url1, alt, title, accessibility, text, width, height, photographer } = this.props;
    return (
      <div className="App-parent-container">
        <div className="App-img-container">
          <img className="App-images" src={url} alt={alt}></img>
          <img className="App-images" src={url1} alt={alt}></img>
        </div>
        <div className="App-text-container">
          <div className="App-text">{title} || {accessibility}</div>
          <div className="App-text">{text} </div>
          <div className="App-text">{width} x {height}</div>
          <div className="App-text">Photo: {photographer}</div>
        </div>
      </div>
    );
  }
}

export default Sculpture;
