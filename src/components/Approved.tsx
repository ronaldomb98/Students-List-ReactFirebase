import * as React from 'react';
import * as firebase from 'firebase'

export interface Hijo {
    nombre: string;
    apellido: string;
    ultimoAnoCursado: string;
    nombrePadre: string;
    apellidoPadre: string;
    persistenceId: number;
}

export interface ListApprovedProps {
    hijos: Hijo[];
}

export class ListApproved extends React.Component<ListApprovedProps, null>{
    render() {
        return <div className='table-container'>
            <div className="row no-gutters headers">
                <div className="col-4">Id</div>
                <div className="col-4">Nombre</div>
                <div className="col-3">Apellido</div>
            </div>

            {this.props.hijos.map(hijo => this.getRoe(hijo))}
        </div>
    }

    getRoe(hijo: Hijo){
        return (<div className="row no-gutters body" key={hijo.persistenceId}>
            <div className="col-4">{hijo.persistenceId.toString()}</div>
            <div className="col-4">{hijo.nombre}</div>
            <div className="col-3">{hijo.apellido}</div>
        </div>)
    }
}

export interface AprovedState {
    approved: null | any[];
}

export class Approved extends React.Component<null, AprovedState> {
    private padresAprobados;
    constructor(props){
        super(props)
        this.state = { approved: null}
    }

    render(){
        if (!this.state.approved) return <div className="loader-center"><div className="loader"></div></div>
        return <div>
            <div className="title primary-title">
                <h2>Estudiantes Aprobados</h2>
            </div>
            <ListApproved hijos={this.state.approved} />
        </div>
    }

    componentWillMount(){
        this.padresAprobados = firebase.database().ref('padresAprobados');
        this.padresAprobados.on('value', snapshot => {
            const _val = snapshot.val();
            const array = Object.keys(_val).map(key => {
                _val[key].key = key;
                return _val[key];
            }).map(padre => {
                padre.hijos.forEach(hijo => {
                    hijo.nombrePadre = padre.nombre;
                    hijo.apellidoPadre = padre.apellido;
                    hijo.key = padre.key;
                });
                return padre.hijos
            });
            const hijos = []
            array.forEach(element => {
                console.log(element)
                element.forEach(hijo => {
                    hijos.push(hijo)
                });
            });
            console.log(hijos)
            this.setState({approved: hijos})
        })
    }

    componentWillUnmount(){
        this.padresAprobados.off();
    }
}