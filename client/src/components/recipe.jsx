import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Recipe extends Component {
  render() {
    console.log('WHAT DO I GOT:', this.props.match.params );
    const recipe = this.props.recipes[this.props.match.params.label]
    console.log(recipe);
    return (
      <div>
        <h3>{recipe.label}</h3>
        <img src={recipe.image} />
        <ul>
          {recipe.dietLabels.map(label => (
            <li>{label}</li>))}
        </ul>
        <ul>{recipe.ingredientLines.length} Ingredients
          {recipe.ingredientLines.map(ingredient => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <h4>Calories: {Math.floor(recipe.calories)}</h4>
        <h4>Source: {recipe.source}</h4>

        <Link className="btn btn-primary" to="/">Back to Search</Link>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}
export default connect(mapStateToProps)(Recipe);
