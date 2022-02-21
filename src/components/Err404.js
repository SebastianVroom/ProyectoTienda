import React from 'react'
import Footer from './Footer'
import Header from './Header'
class Error extends React.Component{
    render(){
        return <div><Header></Header>
        <h1>Parece que la pagina que buscas no existe, use el menu de navegacion para volver</h1>
        <Footer></Footer>
        </div>
    }

}
export default Error