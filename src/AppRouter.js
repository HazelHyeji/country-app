import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryApp from './components/CountryApp';
import AllCountry from './components/AllCountry';
import CountryDetail from './components/CountryDetail';
import Search from './components/Search';
import Quiz from './components/Quiz';

class AppRouter extends Component {
  // constructor(props) {
  //   super(props);
  //   let match = props.match;
  // }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={CountryApp} exact />
          <Route path="/AllCountry" component={AllCountry} exact />
          <Route path="/AllCountry/:nationId" component={CountryDetail} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/Search" component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
