import React,{Component} from 'react';
import axios from'axios';

export class AsteroidId extends Component {
    constructor(props) {
        super(props);
        this.state={
            asteroidIdData : props.location.state
        }
        console.log(this.state.asteroidIdData,'propsss')
        this.asteroidData=this.asteroidData.bind(this);

    }
    asteroidData(asteroidId) {
        let apiKey = 'Hk0VcMi3vSpDhtLfJtxWbyHuJSzJk3N3NZRchujM';
        axios.get(` https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${apiKey}`).then(res=>{
            const asteroidData = res.data;
            console.log(asteroidData,'dataaa')
            this.props.history.push('/asteroid',asteroidData)
        })
        
    }
   
    render() {
        return(
            <div>
                
                 {
                     this.state.asteroidIdData.length>0?this.state.asteroidIdData.map(ids=>{
                         return(
                             <div className="container" style={{textAlign:"center"}}>
                                 <ul>
                            
                             <button className="btn btn-light" onClick={()=>this.asteroidData(ids.id)}>{ids.id}</button>
                             
                         </ul></div>
                             
                             
                         )
                     }):<div></div>
                 }
                
               
            </div>
        )
    }
}