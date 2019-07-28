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
      url: 'api.wederoo.com/stocazzo'
    })
    .then(response=>{
      let text =  response.body.text;
      this.setState({
        text: text,
      }, () => {
        this.clearTextDelay(1000)
      });
    })
    .catch(error=>{
      console.log(error);
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
