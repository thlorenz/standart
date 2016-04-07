'use strict'

var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
    eslint       : eslint
  , cmd          : 'standart'
  , version      : pkg.version
  , homepage     : pkg.homepage
  , bugs         : pkg.bugs.url
  , tagline      : 'Code is Art'
  , eslintConfig : {
      configFile : path.join(__dirname,  'eslintrc.json')
    }
  , formatter: 'Formatter not yet implemented but standard-format should get you pretty much there. Install it via: "npm install -g standard-format"'
}
