import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import RecipeList from './containers/recipe_list';
import SearchBar from './containers/search_bar';
import Recipe from './components/recipe';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <SearchBar />
        <Switch>
          <Route path="/recipes/:label" component={Recipe} />
          <Route exact path="/" component={RecipeList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'),
);
