import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemPage from './itemPage'
import ErrorPage from './errorPage'

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='router'>
                    <div className='navigation'>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to='/products/Furniture'>Furniture</Link>
                        <Link to='/products/Plants'>Plants</Link>
                        <Link to='/products/Tools'>Tools</Link>
                    </div>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/products/:type" component={ItemPage}/>
                    <Route exact path="/products" component={ItemPage}/>
                    <Route exact path="/error/:code" component={ErrorPage}/>
                </div>
            </Router>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
);