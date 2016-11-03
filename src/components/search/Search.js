import React from 'react';
import SpecificSearch from './SpecificSearch';
import NameSearch from './NameSearch';
import RandomSearch from './RandomSearch';

export default class Search extends React.Component {
  
  render() {
    return (
      <div className="col-md-5">
        <SpecificSearch />
        <hr />
        <NameSearch />
        <hr />
        <RandomSearch />
      </div>
    );
  }
  
}