import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/App.css';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={ArticlesListPage}/>
                <Route path='/articles/article:id' component={ArticlePage}/>
              </Switch>
            </div>
          );
  }
}

export default App;
