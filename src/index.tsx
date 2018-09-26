import "../sass/main.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from './components/Main';
import { HashRouter } from 'react-router-dom'
import * as firebase from 'firebase'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(config)

ReactDOM.render(
    <HashRouter>
        <Main></Main>
    </HashRouter>,
    document.getElementById("root")
);