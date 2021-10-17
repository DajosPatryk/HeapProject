const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../../app-server/public'),
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: "http://localhost:3000/"
  }
}