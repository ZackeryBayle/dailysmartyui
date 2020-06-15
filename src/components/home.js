import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./searchBar/searchBar";
import RecentPost from "./searchBar/recentPost";

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {


  handleSearchbarSubmit(query) {
    this.props.fetchPostsQuery(query);
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

export default connect(null, actions)(Home);