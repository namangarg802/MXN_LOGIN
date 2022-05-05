import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import LOGIN from './components/LOGIN';
import Signup from './components/SignUp';
import Detail from './components/Detail';
/*import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';*/

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/LOGIN' component={LOGIN} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Detail' component={Detail} />
        {/*<Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />*/}
      </Layout>
    );
  }
}
