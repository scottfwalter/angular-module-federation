const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const ModuleFederationPlugin = require("webpack").container;
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  // ['components-lib']);
  []);

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
            './HelloModule': './src/app/hello/hello.module.ts',
            // './Component': './src/app/hello//hello1/hello1.component.ts',
        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },
          // "components-lib": { singleton: true, eager: true, requiredVersion: false, import: "/Users/scott/cxone/cxone-suite/app1-angular-12.0.0/node_modules/components-lib"}
          "components-lib": { singleton: true, strictVersion: true, requiredVersion: false }
          // ...sharedMappings.getDescriptors()
        }
    }),
    sharedMappings.getPlugin(),
  ],
};
