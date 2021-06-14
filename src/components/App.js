import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Detail from './Detail'
import Login from './Login'

import './App.css'

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/detail/:id" component={Detail} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
