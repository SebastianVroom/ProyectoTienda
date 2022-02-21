import React from "react";
class Produ extends React.Component{
    constructor(props){
        super(props)
        this.state={cant : 1}

        this.handleChange = this.handleChange.bind(this);
    }
    render(){
        return <div><h2>Producto: {this.props.el.nom}</h2><p>Detalles: {this.props.el.desc}</p>
        <input type='number' value={this.state.cant} onChange={this.handleChange}/><button onClick={()=>this.props.addCarrito(this.props.el,this.state.cant)}>Comprar</button></div>
    }
    handleChange(event) {
        this.setState({cant: event.target.value});
    }
}

export default Produ