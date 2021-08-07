import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import DevPortfolio from './components/pages/DevPortfolio';
import FloralPortfolio from './components/pages/FloralPortfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/Resume' component={Resume}/>
          <Route path='/DevPortfolio' component={DevPortfolio}/>
          <Route path='/FloralPortfolio' component={FloralPortfolio}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
