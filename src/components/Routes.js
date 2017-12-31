import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectArchive from './ProjectArchive';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import PageNotFound from './PageNotFound';
import './Routes.css';

class Routes extends Component {
    render() {
        let timeout = {enter: 500, exit: 250};

        return (
            <TransitionGroup component="main">
                <CSSTransition key={this.props.location.pathname} timeout={timeout} classNames="page-transition" appear>
                    <Switch location={this.props.location}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/projects/:slug" component={ProjectPage} />
                        <Route exact path="/projects"component={ProjectArchive} />
                        <Route exact path="/contact"  component={ContactPage} />
                        <Route path="/" component={PageNotFound} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default withRouter(Routes);
