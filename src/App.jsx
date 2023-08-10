import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  //bai1 : lay vi tri location dung state
  state = {lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  renderContent(){

    if( this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>

    }else if(!this.state.errorMessage && this.state.lat){
      return <div> <SeasonDisplay lat={this.state.lat}></SeasonDisplay></div>

    }else{
    <Spinner></Spinner>
    }

  }
  render() {
    return this.renderContent();
  }

 
}

export default App;
