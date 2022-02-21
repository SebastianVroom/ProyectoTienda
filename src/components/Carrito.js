import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Car extends React.Component{
    constructor(props){
        super(props)
        this.modicar = this.modicar.bind(this)
        this.elimcar = this.elimcar.bind(this)
    }
    render(){
        return <div>
        <Header></Header>
        <ul>
        {this.carrito}
        </ul>
        <Footer></Footer>
        </div>
    }
    modicar(nom,c){
        this.props.modcar(nom,c)
    }
    elimcar(index){
        this.props.elicar(index)
    }

    carrito = this.props.car.map((el,index)=>{return <li key={el.nom}>
        <p>{el.nom}</p><p>{el.desc}, Catidad:{el.cant}</p>
        <button onClick={()=>this.modicar(el['nom'],1)}>+</button>
        <button onClick={()=>this.modicar(el['nom'],-1)}>-</button>
    </li>})

}
export default Car