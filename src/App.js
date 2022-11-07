import Nav from './components/Nav';
import Pulse from './components/Pulse';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Meeting from './components/Meeting';
import Items from './components/Items';
import Actions from './components/PulseComponents/Actions';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="main-wrapper">
          <TopBar />
          <Fragment>
            <Switch>
              <Route exact path="/">
                <Pulse />
              </Route>
              <Route path="/meeting">
                <Meeting />
              </Route>
              <Route path="/items">
                <Items />
              </Route>
              <Route path="/actions">
                <Actions />
              </Route>
            </Switch>
          </Fragment>
        </div>
      </div>
    </Router>
  );
}

export default App;
