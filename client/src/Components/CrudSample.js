import React from 'react';
import axios from 'axios';
import API from '../API';

export default class CrudSample extends React.Component {

  constructor(){
    super();
    this.state = {
      text: '',
      text_list: []
    }
  }

  componentDidMount(){
    API.getTextList()
    .then(response => {
      this.setState({text_list : response.data})
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      <div>
        <input
          type='text'
          value={this.state.text}
          onChange={(e)=>{this.setState({text: e.target.value})}}
        />
        <button onClick={()=>this.onSendTextRequest()}>Send</button>
        {this.renderTextList()}
      </div>
    )
  }

  onSendTextRequest(){
    let text =  this.state.text;
    API.sendText(text)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  onEditTextRequest(id, text){

  }

  onDeleteTextRequest(id){

  }

  renderTextList(){
    return this.state.text_list.map(item => {
      return (
        <div key={item.id}>
          Id {item.id} {item.text}
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    });
  }
}
