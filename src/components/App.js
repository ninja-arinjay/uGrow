import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from './Account';
import Player from './Player/player';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Navigation from './Navigation/Navigation';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Landing from './Landing';
import { AuthProvider } from '../firebase/Auth';
import PrivateRoute from './PrivateRoute';
import Explore from './Explore/Explore';
import Bookmarks from './Bookmarks/Bookmarks';
import Error from './Error/Error';
import SignOut from './SignOut';
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/courses" component={Courses} />
          <PrivateRoute path="/explore" component={Explore} />
          <PrivateRoute path="/bookmarks" component={Bookmarks} />
          <PrivateRoute path="/account" component={Account} />
          <PrivateRoute path="/player" component={Player} />
          <PrivateRoute path="/signout" component={SignOut} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route component={Error} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
