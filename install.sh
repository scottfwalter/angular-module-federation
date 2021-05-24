#!/bin/bash

npm install
echo "shared-angular-components"; cd shared-angular-components && npm install && npm run build-lib && cd ..
echo "preparing app1"; cd app1-angular-12.0.0 && npm install && cd ..
echo "preparing app2"; cd app2-angular-11.0.0-rc.0 && yarn install && cd ..
echo "preparing app3"; cd app3-angular-11.0.0-rc.0 && yarn install && cd ..
echo "preparing container-module-federation"; cd container-module-federation && npm install && cd ..