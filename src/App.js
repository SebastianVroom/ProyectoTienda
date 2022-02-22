import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Car from './components/Carrito'
import Error from './components/Err404';

class App extends React.Component{
  productos=[//lista de productos
    {nom:'Fresas',desc:'Aun en epoca',img:'prod1fre.jpg',prec:10},
    {nom:'Osito de peluche',desc:'Busca un nuevo hogar',img:'prod2osi.jpg',prec:68.99},
    {nom:'Cubo de rubik',desc:'Ligeramente usado, no mas cerca de estar resuelto',img:'prod3rub.jpg',prec:5},
    {nom:'Huevo frito',desc:'Parte de un desayuno, saludable o no',img:'prod4hue.jpg',prec:24.45},
    {nom:'Contenedor',desc:'Nuevo plan de vivienda asequible',img:'prod5con.jpg',prec:1999.99},
    {nom:'Mando a distancia',desc:'Util para aires accondicionados ajenos',img:'prod6mand.jpg',prec:37.56}
    ]
  constructor(){
    super()
    this.state={carrito:[]}
    this.addCarrito = this.addCarrito.bind(this)
    this.modCarrito = this.modCarrito.bind(this)
  }
  render(){//3 rutas Home, carrito y Error
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home prod={this.productos} adcar = {this.addCarrito}/>}/>
          <Route path='/carrito' element={<Car car={this.state.carrito} modcar={this.modCarrito} elicar = {this.elicar}/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    );
  }
  modCarrito (nom,c){//modificar cantidad de elemento
    let resul=this.state.carrito
    for (let i = 0;i<resul.length;i++){
      console.log(i)
      if (nom === resul[i].nom){
        resul[i].cant += c
        if (resul[i].cant <= 0){
          this.elicar(i)
        }
      }
    }
    this.setState({carrito:resul})
    this.guardarCarrito()
  }

  addCarrito (el,c){//añadir elemento al carrito
    let encon = false
    let resul=this.state.carrito
    for (let obj of resul){
      if (el.nom === obj.nom){
        obj.cant += parseInt(c)
        encon = true
      }
    }
    if (!encon){
      resul.push({nom:el.nom,desc:el.desc,img:el.img,prec:el.prec, cant:parseInt(c)})
    }
    this.setState({carrito:resul})
    this.guardarCarrito()
  }

  elicar = (index)=>{//Eliminar elemento de carrito
    let resul=this.state.carrito
    resul.splice(index,1)
    this.setState({carrito:resul})
  }

  componentDidMount(){//cargar de localStorage
    if(localStorage['carrito']){
      this.setState({carrito:JSON.parse(localStorage['carrito'])})
    }
  }

  guardarCarrito(){//guardar a localStorage
    localStorage.setItem("carrito",JSON.stringify(this.state.carrito))
  }
}

export default App;
