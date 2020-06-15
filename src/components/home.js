import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./searchBar/searchBar";
import RecentPost from "./searchBar/recentPost";

export default class Home extends Component {


  handleSearchbarSubmit(query) {
    // console.log("Query", query);
    this.props.history.push('/results');
  }



  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar onSubmit={(query) => this.handleSearchbarSubmit(query)}/>
        </div>
        <div>
          <RecentPost />
        </div>
      </div>
    );
  }
}
 