import './App.css';
import React, { useState, useContext } from 'react';


import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <React.Fragment>
    <Container className="h-100 d-flex flex-cols">
      <CalendarHeader />
      <div className='d-flex flex-fill'>
        <Sidebar />
        <Month month={currentMonth}/>
      </div>
    </Container>
    </React.Fragment>
  );
}

export default App;
