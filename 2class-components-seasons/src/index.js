import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

//function based component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err)=> console.log(err)
//     );

//     return <div>Latitude: </div>
// };

//class based component
class App extends React.Component{
    state = { 
        lat: null , 
        errorMessage: '' 
    };
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat : position.coords.latitude}),
            (err)=> this.setState({ errorMessage: err.message})
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>  Error : {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        
        return <Loader message=" Please click on Allow to access your location"/>;
    }

    //React requires render method mentioned below
    render(){
        return(
            <div className="border">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('#root'));