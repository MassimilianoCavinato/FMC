import React from 'react';
import axios from 'axios';
import CrudSample from './Components/CrudSample';

export default class App extends React.Component {

  constructor () {
    super();
  }

  render () {
    return <CrudSample />
  }
}
