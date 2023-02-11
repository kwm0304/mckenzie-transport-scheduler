import './App.css';
import React, { useState, useContext } from 'react';
import ReactBigCalendar from './ReactBigCalendar';


import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <React.Fragment>
    <ReactBigCalendar />
    </React.Fragment>
  );
}

export default App;
