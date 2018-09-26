import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home';
import { About } from './About';
import { Approved } from './Approved';
export class Main extends React.Component{
    render(){
        return (
            <div>
                <Header></Header>
                <div className="main-content">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/approved" component={Approved}></Route>
                    </Switch>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}