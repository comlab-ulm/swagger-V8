import React from 'react';
import './App.css';import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


function App() {
    return <SwaggerUI url="./openapi.json" />
}

export default App;
