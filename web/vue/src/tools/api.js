// global window.CONFIG

const config = window.CONFIG.ui;
const endpoint = `gekko-gekko.1d35.starter-us-east-1.openshiftapps.com/`;

let basePath, restPath, wsPath;

// rest API path
if(config.ssl) {
  basePath = `https://${endpoint}`;
} else {
  basePath = `http://${endpoint}`;
}

restPath = basePath + 'api/';

// ws API path
if(config.ssl) {
  wsPath = `wss://${endpoint}api`;
} else {
  wsPath = `ws://${endpoint}api`;
}

export {
  wsPath,
  restPath,
  basePath
};
