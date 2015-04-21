#!/usr/bin/env node

'use strict';


//---------//
// Imports //
//---------//

var program = require('commander')
    , root = require('app-root-path');


//------//
// Init //
//------//

console.log('root');
console.log(root);
console.log();
console.log('root.toString()');
console.log(root.toString());


//------//
// Main //
//------//

program
    .version('0.1.0')
    .description('Just an example CLI tool');
