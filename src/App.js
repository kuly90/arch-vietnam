import React, { Component } from 'react';
import './App.css';
import container from './components/container';
import about from './components/about';
import Header from './components/Header';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import New from './components/New';
import NewsDetail from "./components/NewsDetail"
import contact from './components/contact';
import Privacy from './components/Privacy';
import Login from "./components/Login";
import AddNews from "./components/AddNews";
import ListNews from "./components/ListNews";
import Customers from "./components/Customers";
import CustomerDetail from "./components/CustomerDetail"
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route path="/" exact component={container} />
					<Route path="/login" component={Login} />
					<Route path="/addUser" component={AddUser} />
					<Route path="/listUsers" component={ListUsers} />
					<Route path="/addNews" component={AddNews} />
					<Route path="/listNews" component={ListNews} />
					<Route path="/customers" component={Customers} />
					<Route path="/customerDetail/:id" component={CustomerDetail} />
					<Route path="/about" component={about} />
					<Route path="/Solutions" component={Solutions} />
					<Route path="/New" component={New} />
					<Route path="/NewDetail/:id" component={NewsDetail} />
					<Route path="/contact" component={contact} />
					<Route path="/Privacy" component={Privacy} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
