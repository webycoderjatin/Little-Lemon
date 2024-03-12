import React from 'react';

export default function Hero() {
  return (
    <div className='hero'>
      <div className="left">
        <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We're family owned <br />Meditarrian  restaurant <br />focused on traditional recipes <br />served with a modern twist</p>
      </div>
      <div className="right">
        <img src={require("./homeimage.jpg")} alt="" />
      </div>
    </div>
  );
}
