const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  // ['components-lib']);
  []);

module.exports = {
  output: {
    uniqueName: "container-module-federation"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        // For hosts (please adjust)
        remotes: {
            // "mfe1": "mfe1@http://localhost:4201/remoteEntry.js",
            // 'mfe3': "mfe3@http://localhost:4203/remoteEntry.js",
            'mfe4': "mfe4@http://localhost:4205/remoteEntry.js"
        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },
          // "components-lib": { singleton: true, eager: true, strictVersion: true, import: "/Users/scott/cxone/cxone-suite/app1-angular12/node_modules/components-lib"}
          "components-lib": { singleton: true, strictVersion: true, requiredVersion: false}
          // ...sharedMappings.getDescriptors()
        }

        // shared: {
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '12.0.0-rc.1' },
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '12.0.0-rc.1' },
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '12.0.0-rc.1' },
        //   ...sharedMappings.getDescriptors()
        // }

    }),
    sharedMappings.getPlugin(),
  ],
};
