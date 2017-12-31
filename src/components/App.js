import React, { Component } from 'react';
import { BrowserRouter, NavLink  } from 'react-router-dom'
import Routes from './Routes';
import './App.css';

class App extends Component {
    render() {
        let year = new Date().getFullYear()
        return (
            <BrowserRouter basename="/projects/react-router-with-css-transitions/">
                <div>
                    <header>
                        <h1 className="display-4">React Router</h1>
                        <nav>
                            <ul>
                                <li><NavLink to="/" exact>Home</NavLink></li>
                                <li><NavLink to="/about" exact>About</NavLink></li>
                                <li><NavLink to="/projects" exact>Projects</NavLink></li>
                                <li><NavLink to="/contact" exact>Contact</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <Routes />
                    <footer>
                        <div className="container text-center">
                            <small>Copyright &copy; {year}.</small>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;