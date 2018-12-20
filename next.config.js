const withSass = require('@zeit/next-sass')
module.exports = withSass()

// module.exports = {
//     webpack: (config) => {
//       if (config.resolve.alias) {
//         delete config.resolve.alias.react
//         delete config.resolve.alias['react-dom']
//       }
//       module: {
//         loaders: [
//           { test: /\.css$/, loader: "style-loader!css-loader" },
//         ]
//       }
//       // Fixes npm packages that depend on `fs` module
//       config.node = {
//         fs: 'empty'
//       }
  
//       return config
//     }
//   }