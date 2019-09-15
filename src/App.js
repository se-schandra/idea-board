import React, {Component} from "react";
import "./App.css";
import IdeaBoard from "./components/IdeaBoard";

export default class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <header>Tech Test</header>
                <div className="container">
                    <IdeaBoard/>
                </div>
            </div>
        );
    }
};
