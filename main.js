const fs = require('fs');
const archiver = require('archiver');
const modclean = require('modclean');

const distDir = 'dist';
const targetDir = 'node_modules';
const distPath = `${distDir}/${targetDir}.zip`;

const zipArchive = async () => {
    const zipPath = `${targetDir}.zip`;
    const output = fs.createWriteStream(zipPath);

    console.log('archive...')

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

const clearDir = (dir) => {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

(async() => {
    clearDir(distDir);
    fs.mkdirSync(distDir);
    try {
        let mc = modclean({ignorePatterns:['example*', 'examples']});
        mc.clean();
        await zipArchive();
    }catch(e){
        console.error(e.stack);
    }
})();
