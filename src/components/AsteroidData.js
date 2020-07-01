import React,{Component} from 'react';


export class AsteroidData extends Component {
  constructor(props) {
      super(props);
      this.state={
          asteroidData: this.props.location.state
      }
      console.log(this.state.asteroidData.is_potentially_hazardous_asteroid)
  }
    render() {
        return(
            <div className="container body" style={{textAlign:"center" , backgroundColor : "antiquewhite", marginTop:"230px"}}>
                <p><b>Name:</b> {this.state.asteroidData.name}</p>
                <p><b>Nasa Jpl Url:</b> {this.state.asteroidData.nasa_jpl_url}</p>
                <p><b>Is Potentially Hazardous Asteroid:</b> { this.state.asteroidData.is_potentially_hazardous_asteroid + ''}</p>
                
            </div>
        )
    }
}