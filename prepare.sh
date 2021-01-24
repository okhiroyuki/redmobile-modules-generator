#!/bin/sh
echo 'start prepare.sh'
rm dist/node_modules.zip
rm -rf node_modules
rm package-lock.json
npm i --production
./node_modules/.bin/modclean -r --ignore="example*,examples"
rm -rf ./node_modules/recursive-readdir/test
rm -rf ./node_modules/agent-base/test
rm -rf ./node_modules/needle/test
rm -rf ./node_modules/https-proxy-agent/test
rm -rf ./node_modules/mqtt/examples
rm -rf ./node_modules/mqtt/test
rm -rf ./node_modules/needle/test
rm -rf ./node_modules/node-gyp/test
rm -rf ./node_modules/node-ninja/test
rm -rf ./node_modules/nw-gyp/test
rm -rf ./node_modules/dicer/test
rm -rf ./node_modules/mosca/test
rm -rf ./node_modules/mosca/examples
rm -rf ./node_modules/kafka-node/docker/certs
rm -rf ./node_modules/ascoltatori/node_modules/mqtt/examples
rm -rf ./node_modules/ascoltatori/node_modules/mqtt/test
rm -rf ./node_modules/mosca/node_modules/mqtt/examples
rm -rf ./node_modules/mosca/node_modules/mqtt/test
rm -rf ./node_modules/http-proxy-agent/test
rm -rf ./node_modules/pac-proxy-agent/test
rm -rf ./node_modules/proxy-agent/test
rm -rf ./node_modules/socks-proxy-agent/test
rm -rf ./node_modules/get-uri/test
rm -rf ./node_modules/dropbox/generator/stone/example
rm -rf ./node_modules/bcryptjs/dist/bcrypt.min.js.gz
echo 'finish prepare.sh'
