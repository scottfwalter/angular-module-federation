const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:4205/",
        uniqueName: "app3"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({

            // For remotes (please adjust)
            name: "app3",
            library: { type: "var", name: "app3" },
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
