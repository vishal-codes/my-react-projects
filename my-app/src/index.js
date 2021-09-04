//jshint esversion:8
// npx create-react-app my-app

//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
    const buttonText = ["click " , "Me!"];
    return (
      <div>
        <label className="label" htmlFor="name">Enter name : </label>
        <input id="name" type="text" /> &nbsp;
        <button style={{backgroundColor: "black", color : "white"}}>
            {buttonText}
        </button>
      </div>  
    );
};

//Take the react component and show it on the screen
ReactDOM.render(<App/>,document.querySelector('#root'));