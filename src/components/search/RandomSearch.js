import React from 'react';

export default class RandomSearch extends React.Component {
  render() {
    return (
      <div>
        
      <p>Random Match!</p>
      
      <div id="random-male-btn" className="btn btn-info gender">
        Male
      </div>
      <div id="random-female-btn" className="btn btn-info gender">
        Female
      </div>
      <div id="random-droid-btn" className="btn btn-info gender">
        Droid
      </div>
      <div id="random-dontcare-btn" className="btn btn-info gender">
        Don't Care
      </div>
        
      </div>
    );
  }
}