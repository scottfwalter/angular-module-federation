#!/bin/bash

npm install
echo "shared-angular-components"; cd shared-angular-components && npm install && npm run build-lib && cd ..
echo "preparing app1-angular12"; cd app1-angular12 && npm install && cd ..
echo "preparing container-module-federation"; cd container-module-federation && npm install && cd ..