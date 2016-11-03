import React from 'react';
import Search from './search/Search';
import Display from './Display';

export default class SearchAndDisplay extends React.Component {
  render() {
    return (
      <div className="row">
          <Search />
        <div className="col-md-7">
          <Display />
        </div>
      </div>
    );
  }
}