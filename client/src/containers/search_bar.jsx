import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { fetchRecipes } from '../actions';

class SearchBar extends Component {
  onSubmit(term) {
    this.props.fetchRecipes(term.search);
  }

  renderField(field) {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="search"
            component={this.renderField}
          />
          <button
             type="submit" className="btn btn-primary">Search
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values) --> { title: , categories: , content:  }
  const errors = {};
  // validate the inputs from 'values'
  // check to see if there are numbers in the form
  if (!values.search) {
    errors.search = 'Enter a title!';

  // if errors is empty, the form is fine to submit
  // if erros has any properies redux form assumes form in invalid
  }
  return errors;
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
};

export default reduxForm({
  validate,
  form: 'SearchForRecipes',
})(connect(null, { fetchRecipes })(SearchBar));
