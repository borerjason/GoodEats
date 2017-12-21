import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class RecipeList extends Component {
  populateRecipes() {
    console.log('RECIPES IN RECIPE LIST-------', this.props.recipes);
    return (
      <div>
        {_.map(this.props.recipes, item => (
          <div>
            <Link to={`/recipes/${item.label}`}>
              <h3>{item.label}</h3>
              <div className="thumbnail">
                <img src={item.image} />
              </div>
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
      <div> Search For Recipes Above!</div>
    )
  }
}

function mapStateToProps( { recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);
