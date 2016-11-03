import React from 'react';

const logoStyle = {
  height: '80px'
};

export default class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1><img id="icon" src="assets/img/icon.png" alt="<3" style={logoStyle} />Cloud City Love</h1>
        </div>
      </div>
    );
  }
}