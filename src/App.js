import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Car from './components/Carrito'

class App extends React.Component{
  productos=[
    {nom:'Ejem1',desc:'LoreIpsum1'},
    {nom:'Ejem2',desc:'LoreIpsum2'},
    {nom:'Ejem3',desc:'LoreIpsum3'},
    {nom:'Ejem4',desc:'LoreIpsum4'},
    {nom:'Ejem5',desc:'LoreIpsum5'},
    ]
  constructor(){
    super()
    this.state={carrito:[]}
    this.addCarrito = this.addCarrito.bind(this)
    this.modCarrito = this.modCarrito.bind(this)
  }
  render(){
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home prod={this.productos} adcar = {this.addCarrito}/>}/>
          <Route path='/carrito' element={<Car car={this.state.carrito} modcar={this.modCarrito} elicar = {this.elicar}/>}/>
        </Routes>
      </div>
    );
  }
  modCarrito (nom,c){
    let resul=this.state.carrito
    for (let i = 0;i<resul.length;i++){
      console.log(i)
      if (nom == resul[i].nom){
        resul[i].cant += c
        if (resul[i].cant <= 0){
          this.elicar(i)
        }
      }
    }
    this.setState({carrito:resul})
    console.log(this.state.carrito)
    this.forceUpdate()
    this.guardarCarrito()
  }

  addCarrito (el,c){
    let encon = false
    let resul=this.state.carrito
    for (let obj of resul){
      if (el.nom == obj.nom){
        obj.cant += parseInt(c)
        encon = true
      }
    }
    if (!encon){
      resul.push({nom:el.nom,desc:el.desc, cant:parseInt(c)})
    }
    this.setState({carrito:resul})
    console.log(resul)
    this.guardarCarrito()
  }

  elicar = (index)=>{
    let resul=this.state.carrito
    resul.splice(index,1)
    this.setState({carrito:resul})
  }

  componentDidMount(){
    if(localStorage['carrito']){
      this.setState({carrito:JSON.parse(localStorage['carrito'])})
    }
  }

  guardarCarrito(){
    localStorage.setItem("carrito",JSON.stringify(this.state.carrito))
  }
}

export default App;
