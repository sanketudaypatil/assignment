import {Component} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import Doctors from './components/Doctors'
import Profile from './components/Profile'
import Thanks from './components/Thanks'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/thanks" component={Thanks} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
