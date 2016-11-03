import React from 'react';
import Header from './Header';
import SearchAndDisplay from './SearchAndDisplay';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SearchAndDisplay />
      </div>
    );
  }
}