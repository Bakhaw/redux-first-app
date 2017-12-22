import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { showNumber } from './redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.show(5)}>REDUX POUETER</button>
        {this.props.number}       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    show: (number) => { dispatch(showNumber(number)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
