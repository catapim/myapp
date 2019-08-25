import React, { Component } from "react";
import ReactDOM from "react-dom";

class MiniCiudad extends Component {
    constructor(){
        super(); 
        this.state = {
            "population":0,
            "residential_zones":0
        }       
        setInterval(()=>{
            this.getInfo();   
        },1000)
    }

    getInfo() {
        console.log("[get info]")
        // fetch population info from the server
        fetch('/info').then(res => res.json()).then(
            (result) => {
                // iff succesful, update local state
                console.log(result)
                // set the new state of population declared earlier
                this.setState({
                    "population":result.population,
                    "residential_zones": result.residential_zones
                })
            },
            (error) => {
                // if fails, present error
                console.log(error);
            }
        )
    }
    addResidentialZone(){
        alert("alert for add residential zone")
        // calling a new json object from another page
        fetch('/add_residential_zone').then(res => res.json()).then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(error);
            }
        )

    }


    render() {
        return(
            <div>
                <h1>miniciudad</h1>
                <p>population: {this.state.population}</p>
                <p>residential zones: {this.state.residential_zones}</p>                
                <button onClick={this.addResidentialZone}>add residential zone</button>
            </div>           
        )
    }
}

export default MiniCiudad;