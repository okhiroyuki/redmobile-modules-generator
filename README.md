# redmobile-modules-generator

## Installation

```bash
git clone https://github.com/okhiroyuki/redmobile-modules-generator.git
```

## Requirements

- node.js

## Usage

First, Install the Node-RED Custom Node you want to use with the npm command.

Sample:

```bash
npm i node-red-contrib-telegrambot
```

Finally, do `npm run build`.

The `node_modules.zip` file will be generated directly under the dist folder.

## How to apply it to Redmobile

1. Place the generated Zip file directly under the Download folder of your Android device.
2. go to Menu -> Upload in RedMobile and open the Modules screen.
3. click the Upload button
4. After rebooting, you will be able to use custom nodes.


## Note

- If you want to restore the original settings, click the Reset button in the Modules screen.
- Be sure to include the package listed in dependencies by default. If you remove them, they will not work properly.


