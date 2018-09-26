import * as React from "react";

export interface Boxes { color: string, cols: string }
type typeSate = { date }
export class Hello extends React.Component<any, {date: Date}> {
    private intervalId;
    render() {
        let num: number = 1 ;
        return <h1>Hola!! {this.state.date.toLocaleTimeString()}</h1>
    }

    constructor(props){
        super(props)
        this.state = { date: new Date()}
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillMount(){
        this.intervalId = setInterval(()=>this.setState({date: new Date()}),1000)
    }

    componentWillUpdate(){
        console.log("is updating")
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
}

