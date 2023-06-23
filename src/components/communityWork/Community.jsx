import React from 'react';
import one from '../../assets/logo.png'
import two from '../../assets/me-2.jpg'
import three from '../../assets/me-about.jpeg'
import four from '../../assets/me.png'
import './comunity2.css';

const PhotoContainer = () => {
  return (
    <div className="photo-container">
      <div className="photo-scroll">
        <div className="photo">
          <img src={one} alt="Photo 1" />
          <h3>Photo 1</h3>
          <p>Description for Photo 1</p>
        </div>
        <div className="photo">
          <img src={two} alt="Photo 2" />
          <h3>Photo 2</h3>
          <p>Description for Photo 2</p>
        </div>
        <div className="photo">
          <img src={three} alt="Photo 3" />
          <h3>Photo 3</h3>
          <p>Description for Photo 3</p>
        </div>
        <div className="photo">
          <img src={four} alt="Photo 4" />
          <h3>Photo 4</h3>
          <p>Description for Photo 4</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
