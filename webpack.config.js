const data = require('./package.json')
const alias = data._moduleAliases

module.exports = {
  resolve: {
    root: __dirname,
    alias,
  },
  context: __dirname,
}
