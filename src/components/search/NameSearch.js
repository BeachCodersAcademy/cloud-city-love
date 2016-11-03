import React from 'react';

export default class NameSearch extends React.Component {
  render() {
    return (
      <div>
        
      <p>Search By Name!</p>
      
      <div className="input-group">
        <input id="query" type="text" className="form-control" placeholder="Name" />
        <span className="input-group-btn">
          <button id="search-by-name-btn" className="btn btn-success" type="button">Search!</button>
        </span>
      </div>
        
      </div>
    );
  }
}