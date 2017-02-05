# Angular CleaveJS Directive
[![Build Status](https://travis-ci.org/stefanmeschke/ng2-cleave.svg?branch=master)](https://travis-ci.org/stefanmeschke/ng2-cleave)
[![npm version](https://badge.fury.io/js/ng2-cleave.svg)](http://badge.fury.io/js/ng2-cleave)
[![devDependency Status](https://david-dm.org/stefanmeschke/ng2-cleave/dev-status.svg)](https://david-dm.org/stefanmeschke/ng2-cleave?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/stefanmeschke/ng2-cleave.svg)](https://github.com/stefanmeschke/ng2-cleave/issues)
[![GitHub stars](https://img.shields.io/github/stars/stefanmeschke/ng2-cleave.svg)](https://github.com/stefanmeschke/ng2-cleave/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/stefanmeschke/ng2-cleave/master/LICENSE)

## Demo
https://stefanmeschke.github.io/ng2-cleave/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular Directive for CleaveJS

## Installation

Install through npm:
```
npm install --save ng2-cleave
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { Ng2CleaveModule } from 'ng2-cleave';

@NgModule({
  imports: [
    Ng2CleaveModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/stefanmeschke/ng2-cleave/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/ng2-cleave/ng2-cleave.js"></script>
<script>
    // everything is exported ng2Cleave namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://stefanmeschke.github.io/ng2-cleave/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
