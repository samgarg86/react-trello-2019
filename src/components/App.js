import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import '../styles/core/reset.scss';
import '../styles/App.scss';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import BoardContainer from "../containers/BoardContainer";
import About from "./About";

const App = () =>
    <Router>
        <div className="AppContainer">
            <div>
                <Route exact path="/" render={(props) => <BoardContainer {...props} archived={false} />} />
                <Route path="/archived" render={(props) => <BoardContainer {...props} archived={true} />} />
                <Route path="/about" component={About} />
            </div>

            <nav className="App-footer">
                <Link to="/">Board</Link>
                <Link to="/archived">Show Archived</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    </Router>;

export default DragDropContext(HTML5Backend)(App);
