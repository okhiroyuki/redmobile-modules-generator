module.exports = function(context) {
    const path = require('path');
    const fs = require('fs');

    const distPath = path.join(context.opts.projectRoot, 'dist/node_modules.zip');
    fs.unlinkSync(distPath);
};
