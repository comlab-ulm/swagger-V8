import React from 'react';
import './App.css';import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {Route, Switch} from "react-router-dom";


function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <SwaggerUI url="openapi.json" />
            </Route>
            <Route path="/benchmark/" exact >
                <SwaggerUI url="benchmark.json" />
            </Route>
            <Route>
                <div>404</div>
            </Route>
        </Switch>
    )
}

export default App;
