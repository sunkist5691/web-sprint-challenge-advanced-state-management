import React, { Component } from "react";
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SmurfForm from './SmurfForm'
import SmurfProfile from './SmurfProfile'
import "./App.css";
class App extends Component {

  render() {
    console.log('APP: ', this.props)
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <Route exact path='/'><SmurfForm /></Route>
        <Route path='/profiles'>
          {
            this.props.smurfList.map((eachSmurf)=> {

              return <SmurfProfile key={eachSmurf.id} eachSmurf={eachSmurf} />
            })
          }
          </Route>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
     isFetching: state.isFetching,
     smurfList: state.smurfList ? state.smurfList : [],
     error: state.error,
  }
}

export default connect(mapStateToProps, {})(App);
