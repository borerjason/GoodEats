import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class RecipeList extends Component {
  populateRecipes() {
    console.log('RECIPES IN RECIPE LIST-------', this.props.recipes);
    return (
      <div className="recipe-container">
        {_.map(this.props.recipes, item => (
          <div className="recipe-item">
            <Link to={`/recipes/${item.label}`}>
              <div className="thumbnail">
                <img className="recipe-img" src={item.image} />
              </div>
              <p className="recipe-label">{item.label}</p>
            </Link>
            {/* <Link className="btn btn-primary" to={`/recipes/${recipe.label}`}>Explore Recipe</Link> */}
          </div>
        ))}
      </div>
    );
  }
  render() {
    if (!_.isEmpty(this.props.recipes)) {
      return (
        <div className="recipe-container">
        {this.populateRecipes()}
      </div>
      );
    }
    return (
      <div className="test-container">
        {_.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], num => (
          <div className="test-item">
            <div>{num}</div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps( { recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);
