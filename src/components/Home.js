import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Produ from "./Produ"



class Home extends React.Component{
    render(){
        return <div>
            <Header></Header>
            <div class='main'>{this.procProd}</div>
            <Footer></Footer>
            </div>
    }
    procProd = this.props.prod.map((el,index)=>{return <Produ key={index} el={el} addCarrito={this.props.adcar}></Produ>})
}

export default Home