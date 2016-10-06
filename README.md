# component-blueprint
Install TypeScript globally.
```
npm i -g typescript typings
```
Clone and setup project repository.
```
git clone https://github.com/schabluk/component-blueprint.git
cd component-blueprint
npm install
npm link typescript
typings install
```
Start in development mode with HRM.
```
npm run start
```
Create bundle.js with index.html in dist/ folder.
```
npm run build
```
Release for NPM publication
```
npm run release
```
Release minified production bundle
```
npm run relmini
```
