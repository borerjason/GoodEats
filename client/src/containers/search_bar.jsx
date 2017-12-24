import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchRecipes } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.fetchRecipes(this.state.term);
    this.props.history.push('/');
     {/* <Redirect to="/" />; */}
    }
    
    onClick() {
    }

  render() {
    return (
      <div>
        <form onSubmit={(this.onSubmit.bind(this))}>
          <input
            className="form-control"
            type="text"
            value={this.state.term}
            placeholder="Search for a recipe..."
            onChange={e => this.setState({ term: e.target.value })}
          />
          <button
            type="submit" className="btn btn-primary">Search 
          </button>
        </form>
      </div>
    );
  }
}


SearchBar.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { fetchRecipes })(SearchBar));
