import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      winning: false
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.squares.length)
    console.log(treasure)
    this.setState({ treasureLocation: treasure })
  }

  handleLocation = (index) => {
    if(this.state.treasureLocation === index){
      this.setState({ winning: true })
    } else{
      alert(index)
    }
  }

  render(){
    let square = this.state.squares.map((value, index)=> {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          handleLocation={ this.handleLocation }
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id="board">
          { square }
        </div>
        { this.state.winning && <p>I am here on the screen!</p> }
      </React.Fragment>
    )
  }
}
export default App
