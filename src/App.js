
import React,{Component, Suspense} from 'react';

//routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login';
import Home from './components/home/Home';
import Spinner from './components/spinner/Spinner';

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />} >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />

          <Route exact path="*" component={Login} />

        </Switch>
      </BrowserRouter>
      </Suspense>
    );
  }
}


export default App;