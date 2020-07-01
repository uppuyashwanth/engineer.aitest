import React,{Component} from 'react';
import axios from 'axios';

export class LandingPage extends Component {
    constructor() {
        super();
this.state= {
    asteroidId:''
}
this.onChange = this.onChange.bind(this);
this.getAsteroidData = this.getAsteroidData.bind(this);
this.RandomAsteroid = this.RandomAsteroid.bind(this);
    }
    onChange(e) {
        this.setState({
            asteroidId : e.target.value 
        })
    }
    getAsteroidData() {
        let apiKey = 'Hk0VcMi3vSpDhtLfJtxWbyHuJSzJk3N3NZRchujM';
        axios.get(` https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroidId}?api_key=${apiKey}`).then(res=>{
            let asteroidData = res.data;
            console.log(asteroidData,'dataaa')
            this.props.history.push('/asteroid',asteroidData)
        })
       
    }
    RandomAsteroid(){
        let apiKey = 'Hk0VcMi3vSpDhtLfJtxWbyHuJSzJk3N3NZRchujM';
axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`).then(res=>{
    let asteroidIdData=res.data.near_earth_objects;
    console.log(asteroidIdData);
    this.props.history.push('/asteroidId',asteroidIdData);

})
    }
    render() {
        return(
            <div className="container" style={{textAlign:"center"}}>
               

            
                <input type="text" className="input-sm" placeholder="Enter Asteroid ID" style={{    marginTop: "200px"}} value={this.state.asteroidId} onChange={this.onChange}></input>
                <button type="button"  style={{display:"block",marginLeft:"514px"}} disabled={!this.state.asteroidId} onClick={this.getAsteroidData}>Submit</button>
                <button type="button" className=".btn btn-warning" onClick={this.RandomAsteroid}>Random Asteroid</button>
            </div>
            
        )
    }
}