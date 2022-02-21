import {Link} from 'react-router-dom'
import React from 'react'
class Header extends React.Component{
    render(){
        return <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/carrito'>Carrito</Link></li>
                </ul>
            </nav>
        </header>
    }

}
export default Header