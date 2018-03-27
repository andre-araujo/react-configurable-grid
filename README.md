# React Configurable Grid
[![npm](https://img.shields.io/npm/dt/react-configurable-grid.svg)]()
[![GitHub tag](https://img.shields.io/github/tag/andre-araujo/react-configurable-grid.svg)]()

A simple configurable grid for react inspired on [grid-styled](https://github.com/jxnblk/grid-styled) and [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) API, but, with open settings.

**1.05k gz** only

## Usage

React Configurable Grid is as simple as using bootstrap grid-system, where you have rows, cols and container classes to wrap components and align as you please, removing alignment and size adustment from their responsability.

### Install

`npm install react-configurable-grid --save`

### Basics

```javascript
import React from 'react';
import { Row, Col } from 'react-configurable-grid';

function MyComponent() {
    return (
        <section>
            <h1>My component</h1>
            <Row>
                <Col xs={6} md={3} lg={2}>content 1</Col>
                <Col xs={6} md={9} lg={10}>content 2</Col>
            <Row>
        </section>
    );
}

export default MyComponent;

```

## Custom configuration

To use custom breakpoints or custom gutter, just execute configureGrid with config params before your App is mounted;

```javascript
import React from 'react';
import { Row, Col, configureGrid } from 'react-configurable-grid';
import OtherComponent from './OtherComponent';

configureGrid({
    xs: "300px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
    gutter: "60px"
});

function App() {
    return (
        <section>
            <h1>My component</h1>
            <Row>
                <Col lg={2}>content 1</Col>
                <Col lg={10}>content 2</Col>
            <Row>
            <OtherComponent />
        </section>
    );
}

export default App;

```

## API Reference

### Row

| prop | description | default |
| --------- | ----------- | ----------- |
| wrap | flex-wrap | wrap |
| align | align-items | stretch |
| justify | justify-content | flex-start |
| className | className | - |

### Col

| prop | description |
| --------- | ----------- |
| xs | extra small cols |
| sm | small cols |
| md | medium cols |
| lg | large cols |
| xl | extra large cols |
| className | className |

### Default media queries

| prop | description |
| --------- | ----------- |
| xs | 0px or more |
| sm | 576px or more |
| md | 768px or more |
| lg | 992px or more |
| xl | 1200px or more |

## Special thanks

[@malbernaz](https://github.com/malbernaz/)