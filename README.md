# React Configurable Grid
[![npm](https://img.shields.io/npm/dt/react-configurable-grid.svg)]()
[![GitHub tag](https://img.shields.io/github/tag/andre-araujo/react-configurable-grid.svg)]()

A simple configurable grid for react inspired on [grid-styled](https://github.com/jxnblk/grid-styled) and [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) API, but, with open settings.

**1.06k gz** only

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
import configureGrid, { Row, Col } from 'react-configurable-grid';
import OtherComponent from './OtherComponent';

configureGrid({
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
    gutter: "30px"
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

## Server-Side Rendering

### With express server

```javascript
// server.js
...
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../components/App";
...

/*
  first param - Configuration object
  second param - If true returns <style type="text/css" data-grid>grid css</style> tag, else, returns grid css only
*/
const gridStyles = configureGrid({
    gutter: "40px"
}, true);

export default () => (req, res) => {
  const componentString = renderToString(<App />);

  const generatedHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        ${gridStyles}
    </head>
    <body>
        <div id="root">${componentString}</div>
    </body>
    </html>
  `;

  
  res.send(generatedHTML);
}

```

### With NextJS

```javascript
// pages/_document.js
...
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import { configureGrid } from 'react-configurable-grid';
...

/*
  You can pass no arguments if you what to use default config, and return only css code
*/
const gridStyles = configureGrid();

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="pt-BR">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* You need to add data-grid data attribute when using only css code */}
          <style type="text/css" data-grid>{gridStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
```

## API Reference

### Row

| prop | description | default |
| --------- | ----------- | ----------- |
| className | className | - |
| component | changes base element | div |
| wrap | flex-wrap | wrap |
| align | align-items | stretch |
| justify | justify-content | flex-start |


### Col

| prop | description |
| --------- | ----------- |
| className | className |
| component | changes base element | div |
| xs | extra small cols |
| sm | small cols |
| md | medium cols |
| lg | large cols |
| xl | extra large cols |

### Configure grid

Changes default values. Also returns styles for *server-side rendering*

Configuration Object param:

| config object attribute | default |
| --------- | ----------- |
| xs | 0px or more |
| sm | 576px or more |
| md | 768px or more |
| lg | 992px or more |
| xl | 1200px or more |
| gutter | 30px |

Return Tag param:

*true* - returns

```<style type="text/css" data-grid>grid css string</style>```

*false* - returns

```grid css string```

*Signature*

```configureGrid([Object], [Bool]);```

## Special thanks

[@malbernaz](https://github.com/malbernaz/)
