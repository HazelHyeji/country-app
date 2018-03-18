import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryApp from './components/CountryApp';
import AllCountry from './components/AllCountry';
import Search from './components/Search';
import Quiz from './components/Quiz';
import QuizCountry from './components/QuizCoutry';
import QuizDemonym from './components/QuizDemonym';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    let match = props.match;
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={CountryApp} exact={true} />
          <Route path="/AllCountry" component={AllCountry} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/Search" component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
