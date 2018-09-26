import * as React from "react";

/**
 * Nosotros como cipas y las herramientas de desarrollo
 */
export class About extends React.Component{
    render(){
        return <div className='greenback'>
            <section className='cipas'>
                <div className="content-box">
                    <div className="content">
                        <div className='title'>
                            <h2>CIPAS</h2>
                        </div>
                        <div className='row'>
                            <div className='col-8'>
                                <ul>
                                    <li>Brayan Ronaldo Mojica Barrios</li>
                                    <li>Julian Gaviria Valencia</li>
                                    <li>Hernan Dario Castaño Ruiz</li>
                                </ul>
                            </div>
                            <div className='col-2'>
                                <img src="https://cdn3.iconfinder.com/data/icons/developers-iconset/90/Developers_Colorai-02-512.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='herramientas'>
                <div className='title'>
                    <h2>Herramientas</h2>
                </div>
                <div className='images'>
                    <img className='img3' src="https://das6sa4.files.wordpress.com/2017/01/logo-bonitasoft-horizontal-large_0.png?w=640" alt=""/>
                    <img className='img2' src="https://cdn-images-1.medium.com/max/1600/1*gdoQ1_5OID90wf1eLTFvWw.png" alt=""/>
                    <img className='img5' src="https://cdn-images-1.medium.com/max/1600/1*xkvjbVykgUr8I3nZntymsg.png" alt=""/>
                    <img className='img4' src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" alt=""/>
                    <img className='img1' src="https://www.analiticaweb.es/wp-content/uploads/2017/03/Firebase.png" alt=""/>
                </div>
            </section>

            <section className="ut">
                <div className="content-box">
                    <div className="content">
                        <div className="title">
                            <h2>Universidad del Tolima</h2>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    }
}