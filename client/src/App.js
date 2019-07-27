import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: 'Press the button'
    }
    this.chiamaStocazzo = this.chiamaStocazzo.bind(this);
  }

  chiamaStocazzo(){
    axios({
      method: 'GET',
      url: '/stocazzo'
    })
    .then(response=>{
      console.logg(response);
    })
    .catch(error=>{
      console.log(error);
    });
    

    this.setState({
      text: 'Stocazzo ricevuto',
    }, () => {
      this.clearTextDelay(1000)
    });
  }

  clearTextDelay(milliseconds){
    return setTimeout(()=>{
      this.setState({
        text: ".. e ora e' sparito"
      })
    }, 2000 );
  }

  render(){
    return (
      <div>
        <button
          onClick={this.chiamaStocazzo}
        >
          Chiama stocazzo
        </button>
        <p>
          {this.state.text} {this.state.counter}
        </p>
      </div>
    )
  }
}
