# redmobile-modules-generator

Check Youtube👇

[![](http://img.youtube.com/vi/s_MvkH3IXrM/0.jpg)](http://www.youtube.com/watch?v=s_MvkH3IXrM "")


## Installation

```bash
git clone https://github.com/okhiroyuki/redmobile-modules-generator.git
```

## Requirements

- RedMobile v7.x or higher
- node.js

## Usage

First, do `npm i`.

Next, Install the Node-RED Custom Node you want to use with the npm command.

Sample:

```bash
// Add any module
npm i node-red-contrib-telegrambot
```

Finally, do `npm run build`.

The `node_modules.zip` file will be generated directly under the dist folder.

## How to apply it to Redmobile

1. Set the generated **node_modules.zip** to the Android device.
2. go to Menu -> Upload in RedMobile and open the Modules screen.
3. Select the **node_modules.zip** file.
4. click the Upload button
5. After rebooting, you will be able to use custom nodes.

## Note

- If you want to restore the original settings, click the Reset button in the Modules screen.
- Be sure to include the package listed in dependencies by default. If you remove them, they will not work properly.
