import React, { Component } from 'react';

export default class RecentPost extends Component {
    render() {
        return (
            <div className="recent-post-wrapper">
                <div className="recent-post">
                    <div className="recent-post-heading">
                        <h2>Recent Post</h2>
                    </div>
                    <div className="recent-post-list">
                        <ul>
                            <li>Post Zero</li>
                            <li>Post One</li>
                            <li>Post Two</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        );
    }
}