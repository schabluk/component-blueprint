# component-blueprint
#### Install and Setup
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
To release and install locally:
```
npm pack
> component-blueprint-1.0.7.tgz
```
From project directory:
```
npm install /path/to/component-blueprint-1.0.7.tgz
```
