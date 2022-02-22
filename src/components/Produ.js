import React from "react";
class Produ extends React.Component{
    constructor(props){
        super(props)
        this.state={cant : 1, click :false}
        this.handleChange = this.handleChange.bind(this);
    }
    render(){//carta el producto
        const clicked = this.state.click
        if (clicked){
            return <div onMouseLeave={()=>this.toggleoff()}><img src={this.props.el.img} alt={this.props.el.nom}/><h2>Producto: {this.props.el.nom}</h2><p>Detalles: {this.props.el.desc}</p><p>precio:{this.props.el.prec}€</p>
            <input min='1' type='number' value={this.state.cant} onChange={this.handleChange}/><button onClick={()=>this.props.addCarrito(this.props.el,this.state.cant)}>Comprar</button></div>
        }else{
            return <div onClick={()=>this.toggleon()} ><img src={this.props.el.img} alt={this.props.el.nom}/><h2>Producto: {this.props.el.nom}</h2></div>
        }
    }
    handleChange(event) {
        event.stopPropagation()
        this.setState({cant: event.target.value});
    }
    toggleon(){//logica para carta detallada
        this.setState({click:true})
    }
    toggleoff(){
        this.setState({click:false})
    }
}

export default Produ