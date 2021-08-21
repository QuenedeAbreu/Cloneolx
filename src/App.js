import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App(props) {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps,mapDispatchToProps)(App);
