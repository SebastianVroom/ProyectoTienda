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
        const total = this.props.car.reduce((acc,el)=>acc + (parseFloat(el.prec) * parseInt(el.cant)),0)
        const carrito = this.props.car.map((el,index)=>{return <li key={el.nom.toString()}>
        <img src={el.img} alt={el.nom}/>
        <p>{el.nom}</p><p>{el.desc}, Catidad: {el.cant}, precio por unidad: {el.prec}€</p>
        <button onClick={()=>this.modicar(el['nom'],1)}>+</button>
        <button onClick={()=>this.modicar(el['nom'],-1)}>-</button>
        <button onClick={()=>this.elimcar(index)}>X</button>
    </li>})
        return <div>
        <Header></Header>
        <ul class='carrito'>
        {carrito}
        </ul>
        <p class='total'>Total: {total}</p>
        <Footer></Footer>
        </div>
    }
    modicar(nom,c){
        this.props.modcar(nom,c)
    }
    elimcar(index){
        this.props.elicar(index)
    }

    

}
export default Car