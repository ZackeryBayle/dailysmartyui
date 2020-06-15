import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    handleFormSubmit(query) {
        console.log("Query", query);
        this.props.onSubmit(query);

    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }


    render() {

        const { handleSubmit } = this.props;


        return (
            <div className="search-form">
                <form className="searchbar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> 
                    <Field name="query" component={this.renderInput} />
                </form>
            </div>
        );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;