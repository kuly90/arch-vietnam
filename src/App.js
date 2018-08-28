import React, { Component } from 'react';
import './App.css';
import container from './components/container';
import about from './components/about';
import Header from './components/Header';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import New from './components/New';
import contact from './components/contact';
import Privacy from './components/Privacy';
import { BrowserRouter as Router ,Route, NavLink} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>

                <div className="App">
                    <Header />
                        <Route path="/" exact component={container} />
                        <Route path="/about" component={about} /> 
                        <Route path="/Solutions" component={Solutions} /> 
                        <Route path="/New" component={New} /> 
                        <Route path="/contact" component={contact} /> 
                        <Route path="/Privacy" component={Privacy} /> 
                    <Footer />               
                </div>

            </Router>
        );
    }
}

export default App;
