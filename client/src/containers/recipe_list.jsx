import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
  populateRecipes() {
    console.log('RECIPES IN RECIPE LIST-------', this.props.recipes);
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <div>
            <h3>{recipe.label}</h3>
            <div className="thumbnail">
              <img src={recipe.image} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    if (Array.isArray(this.props.recipes)) {
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
