const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:4205/",
        uniqueName: "mfe4"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({

            // For remotes (please adjust)
            name: "mfe4",
            library: { type: "var", name: "mfe4" },
            filename: "remoteEntry.js",
            exposes: {
                './web-components': './src/bootstrap.ts',
            },

            // shared: ["@angular/core", "@angular/common", "@angular/router"]

            shared: {
              // "@angular/core": { singleton: true, strictVersion: true },
              "@angular/core": { requiredVersion: "11.0.0-rc.0" },
              "@angular/common": { requiredVersion: "11.0.0-rc.0"},
              "@angular/router": { requiredVersion: "11.0.0-rc.0" }
            }
          })
      ],
    };
