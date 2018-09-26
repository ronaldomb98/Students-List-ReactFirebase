import * as React from 'react';
import { NavLink } from 'react-router-dom'

export class Header extends React.Component {
    render() {
        return (<header className='header'>
            <nav>
              <div className='header_title'>
                <NavLink to='/'>HEROGA</NavLink>
              </div>
              <ul>
                <li><NavLink activeclassname='active' to='/about'>ACERCA DE</NavLink></li>
                <li><NavLink activeClassName="active" to='/approved'>LISTADO</NavLink></li>
              </ul>
            </nav>
          </header>)
    }
}