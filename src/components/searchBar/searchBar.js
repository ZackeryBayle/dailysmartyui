import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-form">
                <form>
                    <input placeholder="search dailysmarty" />
                </form>
            </div>
        );
    }
}