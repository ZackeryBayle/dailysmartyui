import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./searchBar/searchBar";
import RecentPost from "./searchBar/recentPost";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <RecentPost />
        </div>
      </div>
    );
  }
}
