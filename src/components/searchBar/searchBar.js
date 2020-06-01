import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log("Query", query);
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



export default SearchBar;