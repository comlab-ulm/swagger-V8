import React from 'react';
import './App.css';import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {Route, Switch} from "react-router-dom";


function App() {
    return (
        <Switch>
            <Route path="/swagger-V8/" exact={true}>
                <SwaggerUI url="./openapi.json" />
            </Route>
            <Route path="/swagger-V8/benchmark" exact={true}>
                <SwaggerUI url="./benchmark.json" />
            </Route>
        </Switch>
    )
}

export default App;
