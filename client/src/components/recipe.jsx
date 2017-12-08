import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Recipe extends Component {
  render() {
    const recipe = this.props.recipes[this.props.match.params.label]
    console.log(recipe);
    return (
      <div>
        <h3>{recipe.label}</h3>
        <img src={recipe.image} />
        <ul>
          {recipe.dietLabels.map((label) => {
            return <li>{label}</li>
          })}
        </ul>
        <Link className="btn btn-primary" to="/">Back to Search</Link>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}
export default connect(mapStateToProps)(Recipe);
