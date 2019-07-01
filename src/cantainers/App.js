import React, { Component } from 'react';
import '../index.scss';
import { Route, Switch, Link } from 'react-router-dom';

import R1 from '../components/001';
import R2 from '../components/002';
import R3 from '../components/003';
import R4 from '../components/004';
import R5 from '../components/005';
import R6 from '../components/006';
import C1 from '../components/007';
import H1 from '../components/008';
import C2 from '../components/009';
import H2 from '../components/010';
//import H3 from '../components/011';

class App extends Component {
    render() {
        return (
            <section className="container">
                <h4>Examples:</h4>
                <ul>
                    <li><Link to="/r1">recompose 1</Link></li>
                    <li><Link to="/r2">recompose 2</Link></li>
                    <li><Link to="/r3">recompose 3</Link></li>
                    <li><Link to="/r4">recompose 4</Link></li>
                    <li><Link to="/r5">recompose 5</Link></li>
                    <li><Link to="/r6">recompose 6</Link></li>
                    <li><Link to="/c1">class 1</Link></li>
                    <li><Link to="/h1">hooks 1</Link></li>
                    <li><Link to="/c2">class 2</Link></li>
                    <li><Link to="/h2">hooks 2</Link></li>
                    {/*<li><Link to="/h3">hooks 3</Link></li>*/}
                </ul>

                <Switch>
                    <Route path='/r1' component={R1} />
                    <Route path='/r2' component={R2} />
                    <Route path='/r3' component={R3} />
                    <Route path='/r4' component={R4} />
                    <Route path='/r5' component={R5} />
                    <Route path='/r6' component={R6} />
                    <Route path='/c1' component={C1} />
                    <Route path='/h1' component={H1} />
                    <Route path='/c2' component={C2} />
                    <Route path='/h2' component={H2} />
                    {/*<Route path='/h3' component={H3} />*/}
                </Switch>
            </section>
        );
    }
}

export default App;
