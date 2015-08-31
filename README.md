
# Sounds of the Internet

## Installation

1. Clone this repo to your device
2. Install node modules:

``` text
npm install
```

## Development server

1. Run the dev server

``` text
npm start
```

2. Open `http://localhost:8080/` in your browser

- The configuration is in `webpack/webpack-hot-dev-server.config.js`.
- Static HTML is served from `webpack/dev-server-public`.
- The server automatically recompiles and refreshes the page when files are changed (and live injects the change if possible).

## Build for testing / production

``` text
// testing
npm run build-dev

// production (minified etc)
npm run build-production
```

- The configuration is in `webpack/webpack-production.config.js`.
- The build folders are located in `Frontend/build/`.
