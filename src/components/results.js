import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from './searchBar/searchBar';

export default class example extends Component {
    render() {
        return (
            <div>
                <Logo size={55}/>
                <SearchBar />
            </div>
        );
    }
}