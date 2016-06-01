const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
          join = path.join,
          resolve = path.resolve;
const getConfig = require('hjs-webpack');

// Path Variables
const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'node_modules');
const dest = join(root, 'dist');

// Dev Environment
const NODE_ENV = process.env.NODE_ENV;
const isDev = (NODE_ENV === 'development');


var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
});


// CSS Modules
const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;
const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l && l.loader && l.loader.match(match));
  return found ? found[0] : null;
}

const cssLoader = findLoader(config.module.loaders, matchCssLoaders);

const newLoader = Object.assign({}, cssLoader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssLoader.loader
                .replace(matchCssLoaders, `$1$2?modules&localIndentName=${cssModulesNames}$3`)
});
config.module.loaders.push(newLoader);
cssLoader.test = new RegExp(`[^module]${cssLoader.test.source}`);
cssLoader.loader = newLoader.loader;

config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'styles!css'
});
// Post CSS
config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
  ]);

module.exports = config;
