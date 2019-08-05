import React, {Component} from 'react';
import Shape from './Shape'

class Selector extends Component {

  constructor() {
    super()
    this.state = {
      selectedShape:'' // later can change to 'square', 'circle' or 'triangle'
    }
  }
  selectShape = (shapeName) => { //selectedShape is our state, selectShape is the method
    console.log(shapeName)
    this.setState({
      selectedShape: shapeName
    })
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: <span>{this.state.selectedShape}</span></div>
        </div>
        <div className="shape-list"> 
        Add the shape component here!
        <Shape shape="square" selectShape={this.selectShape}/>
        <Shape shape="circle" selectShape={this.selectShape}/>
        <Shape shape="triangle" selectShape={this.selectShape}/>
        {/* <Shape/> component refers to component from Shape.js file */}
		{/* shape="square" and selectSHape={this.selectShape} are passed as props of <Shape/> component, look at Shape.js file for how these are used */}
      </div>
      </div>
    )
  }
}
export default Selector;
