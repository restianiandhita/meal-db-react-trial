import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from '../Pages/main';
import MainCat from '../Pages/main-cat';
import Category from '../Pages/category';
import Detail from '../Pages/detail';

let Routers = () => {
    return (
        <Router>
            <div className="navigation">
                <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand"> <Link className="navbar-brand" aria-current="page" to="/">Your Meal</Link></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav d-flex mb-3 mb-lg-0">
                                <li className="nav-item p-2 bd-highlight">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item p-2 bd-highlight">
                                    <Link className="nav-link" to="/category">Category</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/finding/:search">
                        <Main />
                    </Route>
                    <Route path="/cat/:catId">
                        <MainCat />
                    </Route>
                    <Route path="/category">
                        <Category />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routers;