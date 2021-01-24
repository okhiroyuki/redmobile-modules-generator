module.exports = function(context) {
    const fs = require('fs');
    const path = require('path');
    const archiver = require('archiver');
    
    if (context.opts.platforms.indexOf('android') < 0) {
        return;
    }
    const targetDir = path.join(context.opts.projectRoot, 'platforms/android/app/src/main/assets/www/nodejs-project/node_modules');
    const distPath = path.join(context.opts.projectRoot, 'dist/node_modules.zip');

    const zipArchive = async (_targetDir, _distPath) => {
        const zipPath = `${_targetDir}.zip`;
        const output = fs.createWriteStream(zipPath);

        output.on('close', function() {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
            fs.copyFileSync(zipPath, _distPath);
            console.log("done");
        });

        const archive = archiver('zip', {
          zlib: { level: 9 }
        });
      
        archive.pipe(output);
        archive.directory(_targetDir, false);
    
        await archive.finalize();
    }

    (async() => {
        await zipArchive(targetDir, distPath);
    })();
};
