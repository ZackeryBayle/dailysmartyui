import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from './searchBar/searchBar';

export default class example extends Component {

    handleSearchbarSubmit(query){
        console.log(query);
    }

    render() {
        return (
            <div>
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchbarSubmit(query) }/>
            </div>
        );
    }
}