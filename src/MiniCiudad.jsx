import React, { Component } from "react";
import ReactDOM from "react-dom";

class MiniCiudad extends Component {
    constructor(){
        super(); 
        this.state = {
            "population":0,
            "residential_zones":0
        }        
    }

    addResidentialZone(){
        alert("add residential zone")
    }

    render() {
        return (
            <div>
                <h1>miniciudad</h1>
                <p>population: {this.state.population}</p>
                <p>residential zones: {this.state.residential_zones}</p>
                
                <button onClick={this.addResidentialZone}>add residential zone</button>
            </div>           
        );
    }
}

export default MiniCiudad;