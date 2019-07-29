import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import News from '../pages/News';
import About from '../pages/About';
import Theatre from '../pages/Theatre';
import Play from '../pages/Play';
import Article from '../pages/Article';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="main">
                <Switch>
                    <Route path='/news' exact component={News}/>
                    <Route path='/about' exact component={About} />
                    <Route path='/theatre' exact component={Theatre} />
                    <Route path='/theatre/play/:whichPlay' exact component={Play} />
                    <Route path='/news/article/:play' exact component={Article}/>
                    <Route path='/news'/>
                </Switch>
            </main>
         );
    }
}
 
export default Main;