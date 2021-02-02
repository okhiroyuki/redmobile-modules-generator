#!/bin/sh
echo 'start prepare.sh'
rm -rf dist && mkdir dist
rm -rf node_modules
rm package-lock.json
npm i --production
./node_modules/.bin/modclean -r --ignore="example*,examples"
echo 'finish prepare.sh'
