var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var loadersByExtension = require("./webpack/loadersByExtension")
var joinEntry = require("./webpack/joinEntry")

var cssVars = require('postcss-simple-vars')
var cssMixins = require('postcss-mixins')

module.exports = function(options) {
  var entry = {
    main: reactEntry("Entry")
    // second: reactEntry("Second")
  }
  var loaders = {
    "jsx|js": options.hotComponents ? ["react-hot-loader", "babel"] : "babel",
    "json": "json-loader",
    "txt": "raw-loader",
    "png|jpg|jpeg|gif": "file-loader",
    "woff": "url-loader?limit=100000",
    "ttf|eot": "file-loader",
    "wav|mp3": "file-loader",
    "html": "html-loader",
    "md|markdown": ["html-loader", "markdown-loader"],
    "svg": "raw-loader"
  }

  var stylesheetLoaders = {
    "css": 'css-loader?modules&importLoaders=1&localIdentName=[path]__[local]___[hash:base64:5]!postcss-loader',
  }

  var additionalLoaders = [] // { test: /some-reg-exp$/, loader: "any-loader" }
  var alias = {}
  var aliasLoader = {}
  var externals = []

  var modulesDirectories = [
    '_shared',
    './Frontend',
    'node_modules',
  ]

  var extensions = ["", ".js", ".jsx", ".scss", ".css"]

  var root = path.join(__dirname, "Frontend")

  var output = {
    path: path.join(__dirname, "Frontend", "build", options.staging ? "staging" : "production"),
    publicPath: "/",
    filename: "[name].js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
    chunkFilename: (options.devServer ? "[id].js" : "[name].js") + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
    sourceMapFilename: "debugging/[file].map",
    libraryTarget: options.prerender ? "commonjs2" : undefined,
    pathinfo: options.debug,
  }

  var plugins = [
    new webpack.PrefetchPlugin("react"),
    new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
  ]

  // cool example of process env vars -> build
  plugins.push(
    new webpack.DefinePlugin({
      "__HOST__": JSON.stringify(process.env.HOST)
    })
  )

  if(options.prerender) {
    aliasLoader["react-proxy$"] = "react-proxy/unavailable"
    externals.push(/^react(\/.*)?$/) // dunno if this really does anything?
    plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })) // CHONKS.
  }

  if(options.commonsChunk) {
    plugins.push(new webpack.optimize.CommonsChunkPlugin("commons", "commons.js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : "")));
  }

  function reactEntry(name) {
    return (options.prerender ? "./webpack/prerender?" : "./Frontend/Entry?") + name
  }

  if(options.devServer) {
    if(options.hot) {
      entry = joinEntry("webpack/hot/dev-server", entry)
    }
    // TODO: make the host / port dynamic here based on your computer...
    entry = joinEntry("webpack-dev-server/client?http://localhost:8080", entry)
  }

  Object.keys(stylesheetLoaders).forEach(function(ext) {
    var loaders = stylesheetLoaders[ext]
    if(Array.isArray(loaders)) loaders = loaders.join("!")
    if(options.prerender) {
      stylesheetLoaders[ext] = "null-loader"
    } else if(options.separateStylesheet) {
      stylesheetLoaders[ext] = ExtractTextPlugin.extract("style-loader", loaders)
    } else {
      stylesheetLoaders[ext] = "style-loader!" + loaders
    }
  })

  if(options.separateStylesheet && !options.prerender) {
    plugins.push(new ExtractTextPlugin("[name].css"))
  }

  if(options.minimize) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    )
  }

  return {
    entry: entry,
    output: output,
    target: options.prerender ? "node" : "web",
    module: {
      loaders: loadersByExtension(loaders).concat(loadersByExtension(stylesheetLoaders))
    },
    devtool: options.devtool,
    debug: options.debug,
    resolveLoader: {
      root: path.join(__dirname, "node_modules"),
      alias: aliasLoader
    },
    externals: externals,
    resolve: {
      root: root,
      modulesDirectories: modulesDirectories,
      extensions: extensions,
      alias: alias,
    },
    postcss: [
      cssMixins({
        mixinsDir: path.join(__dirname, './Frontend/css/mixins/')
      }),
      cssVars({
        variables: function () {
          return require('./Frontend/css/variables.js');
        }
      }),
      require('postcss-color-function')(),
      require('postcss-inline-comment'),
      require('postcss-nested'),
      require('autoprefixer-core'),
    ],
    plugins: plugins
  }
}
