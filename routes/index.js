/*
  Welcome to manosteele's react-centric module management technique:

  When working with submodules (i.e. Controllers, Routers, ETC.)
  Create an index.js file on the root of the submodule folder
  create an object that imports all the modules in the folder and export it.
  
  When referencing this outside do the following:
  EX:
  let {HomeController, APIController, WikiController} = require('./controllers')
  
*/
// Submodules, go here 
let users = require('./users')
let root = require('./root')
let example = require('./example')
// Add them to Users
let Routes = {
  users,
  root,
  example
};

module.exports = Routes;
