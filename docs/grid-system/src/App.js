import React, { Component } from 'react';
import { Row, Col, configureGrid } from 'react-configurable-grid'

configureGrid({
  xs: "300px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  gutter: "100px"
});

function App() {
  return (
    <div className="app">
      <Row justify="center" wrap="wrap">
        {
          [1, 2, 3, 4].map((x, index) => (
            <Col xs={12} md={3} lg={4} key={index} className="outer-col">
              <div className="inner-col">col-xs-{index}</div>
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default App;
