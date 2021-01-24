const fs = require('fs');
const archiver = require('archiver');

const targetDir = 'node_modules';
const distPath = 'dist/node_modules.zip';

const zipArchive = async () => {
    const zipPath = `${targetDir}.zip`;
    const output = fs.createWriteStream(zipPath);

    output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
        fs.copyFileSync(zipPath, distPath);
        fs.unlinkSync(zipPath);
        console.log("done");
    });

    const archive = archiver('zip', {
      zlib: { level: 9 }
    });
  
    archive.pipe(output);
    archive.directory(targetDir, false);

    await archive.finalize();
}

(async() => {
    await zipArchive();
})();
