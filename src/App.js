import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import planeswalkers from './planeswalkers.json'
import Counter from './components/Counter'

class App extends Component {
  state = {
    planeswalkers,
    score: 0,
    hiScore: 0,
    clicked: []
  }

  clickPlaneswalker = (planeswalker) => {
    console.log("Was clicked")
    if(this.state.clicked.includes(planeswalker)){
      this.setState({
        score: 0,
        clicked: []
      })
    }
    else{
      const tempHiScore = Math.max(this.state.score + 1, this.state.hiScore)
      this.setState({
        score: this.state.score + 1,
        clicked: this.state.clicked.concat([planeswalker]),
        hiScore: tempHiScore
      })
    }
    this.shuffle()
  }

    shuffle = () => {
      let a = this.state.planeswalkers
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      this.setState({
        planeswalkers: a
      })
  }
  

  render(){
      return (
        <div className="App">
        <Counter score={this.state.score} hiScore={this.state.hiScore} ></Counter>
        {this.state.planeswalkers.map(planeswalker =>
      <Card 
      img={planeswalker.img}
      name={planeswalker.name}
      clickPlaneswalker={this.clickPlaneswalker}>
      </Card>)}
        </div>
      );
  
  }
}


export default App;