import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../sass/main.scss';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <Router>
        <div className="container">
        <Header/>
        <Main/>
        <Footer/>
        </div>
      </Router>
      </>
     );
  }
}
 
export default App;