# component-blueprint
### Install and Use
```
npm i -S component-blueprint
```
In React component:
```
import React, { Component } from 'react';
import {Hello} from 'component-blueprint'

class App extends Component {
  render() {
    return (
      <Hello name="World" />
    );
  }
}
```
### Clone and Setup
Install TypeScript globally.
```
npm i -g typescript@2.0
```
Clone the repository and install dependencies.
```
git clone https://github.com/schabluk/component-blueprint.git
cd component-blueprint
npm link typescript
npm install
```
### Running and building
To start in development mode with HRM:
```
npm run start
```
To create bundle.js with index.html in dist/ folder:
```
npm run build
```
To release for publication in NPM:
```
npm run release
npm version patch
npm publish
```
To release minified production bundle:
```
npm run relmini
```
To release and install locally:
```
npm pack
> component-blueprint-1.0.7.tgz
```
From project directory:
```
npm i /path/to/component-blueprint-1.0.7.tgz
```
