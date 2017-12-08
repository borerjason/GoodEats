import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class RecipeList extends Component {
  populateRecipes() {
    console.log('RECIPES IN RECIPE LIST-------', this.props.recipes);
    return (
      <div>
        {_.map(this.props.recipes, recipe => (
          <div>
            <h3>{recipe.label}</h3>
            <div className="thumbnail">
              <img src={recipe.image} />
            </div>
            <Link className="btn btn-primary" to={`/recipes/${recipe.label}`}>Explore Recipe</Link>
          </div>
        ))}
      </div>
    );
  }
  render() {
    if (!_.isEmpty(this.props.recipes)) {
      return (
        <div>
        {this.populateRecipes()}
      </div>
    );
    }
    return (
      <div> Search For Recipes Above!</div>
    )
  }
}

function mapStateToProps( { recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);
