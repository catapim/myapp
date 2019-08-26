import React, { Component } from "react";
import ReactDOM from "react-dom";

class MiniCiudad extends Component {
    constructor(){
        super(); 
        this.state = {
            "population":0,
            "residential_zones":0,
            "my_date": null
        }       
        setInterval(()=>{
            this.getInfo();   
        },1000)
        //binding allows me to have functions with this insted of made them arrow functions
        this.addResidentialZone = this.addResidentialZone.bind(this)
        this.destroyResidentialZone = this.destroyResidentialZone.bind(this)
        
    }

    getInfo() {
        // fetch population info from the server
        fetch('/info').then(res => res.json()).then(
            (result) => {
                // iff succesful, update local state
                // set the new state of population declared earlier
                this.setState({
                    "population":result.population,
                    "residential_zones": result.residential_zones,
                    "my_date":new Date(result.my_date)
                })
            },
            (error) => {
                // if fails, present error
                console.log(error);
            }
        )
    }
    addResidentialZone() {
        // calling a new json object from another page
        fetch('/add_residential_zone').then(res => res.json()).then(
            (result) => {
                this.getInfo()
            },
            (error) => {
                console.log(error);
            }
        )
    }

    destroyResidentialZone(){
        fetch('/destroy_residential_zone').then(res => res.json()).then (
            (result) => {
                this.getInfo()
            },
            (error) => {
                console.log(error);
            }
        )
    }


    render() {
        let day_of_week=null
        let date=null;
        let month = null;
        let year = null;
        if(this.state.my_date) {
            day_of_week=this.state.my_date.getDay();
            date=this.state.my_date.getDate();
            month=this.state.my_date.getMonth();
            year=this.state.my_date.getFullYear();
        } 
        return(
            <div>
                <h1>Miniciudad</h1>
                <p>population: {this.state.population}</p>
                <p>residential zones: {this.state.residential_zones}</p>    
                <p>date: week day: {day_of_week}  day:  {date}  month: {month} year: {year}</p>            
                <button onClick={this.addResidentialZone}>add residential zone</button>
                <button onClick={this.destroyResidentialZone}>destroy residential zone</button>
            </div>           
        )
    }
}

export default MiniCiudad;