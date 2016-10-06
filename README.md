# component-blueprint
#### Install and Setup
Install TypeScript globally.
```
npm i -g typescript typings
```
Clone the repository and install dependencies.
```
git clone https://github.com/schabluk/component-blueprint.git
cd component-blueprint
npm install
npm link typescript
typings install
```
#### Running and building
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
```
To release minified production bundle:
```
npm run relmini
```
