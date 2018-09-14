import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Comentarios from './Comentarios';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <br />
            <div className="container">
              <Route exact path='/' component={Comentarios} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
