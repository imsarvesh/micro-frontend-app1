const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  remotes: {
    app2: "app2@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./AddTodo": "./src/AddTodo",
    "./Todos": "./src/Todos",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
