import React, { Component } from 'react';
import { Row, Col } from 'react-configurable-grid'

function App() {
  return (
    <div className="app">
      <Row justify="flex-end">
        {
          [1, 2, 3, 4, 5].map((x, index) => (
            <Col xs={3} mb={index + 'px'} key={index} className="outer-col">
              <div className="inner-col">col-xs-{index}</div>
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default App;
