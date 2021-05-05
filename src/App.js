import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './movies/components/Navigation';
import About from './movies/routes/About';
import Details from './movies/routes/Details';
import Home from './movies/routes/Home';

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Details} />
      <Route path="/" component={Home} exact={true} />
    </HashRouter>
  );
};

export default App;
