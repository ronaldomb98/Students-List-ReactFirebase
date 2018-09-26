import * as React from "react";

/**
 * En este componente presentamos a heroga como una escuela
 */
export class Home extends React.Component{
    render(){
        
        return <div className='container'>
            <div className="title primary-title">
                <h2>Informe</h2>
            </div>
            <iframe className='informe-frame' src="https://docs.google.com/document/d/1tqXxz52aFTlmmG08NEr6plWZsQYkagm4E9mLAEbMb0M/edit?usp=sharing"></iframe>
        </div>
    }
}