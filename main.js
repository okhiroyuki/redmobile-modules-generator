const fs = require('fs');
const archiver = require('archiver');
const childProcess = require('child_process');
const modclean = require('modclean');
const rimraf = require('rimraf');

const distDir = 'dist';
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

const cleanDir = (dir) => {
    return new Promise((resolve) => {
        if (fs.existsSync(dir)) {
            rimraf(dir, () => {
                resolve();
            });
        }else{
            resolve();
        }
    });
}

const runNpm = (cmd, args) => {
    return new Promise((resolve) => {
        let n = childProcess.spawn(cmd,args);
        n.stdout.setEncoding('utf-8');
        n.stdout.on('data', (data) => {
            console.log(`${data}`);
        });
          
        n.stderr.on('data', (data) => {
            console.error(`${data}`);
        });
          
        n.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            resolve();
        });
    });
}

(async() => {
    await cleanDir(distDir);
    fs.mkdirSync(distDir);
    await cleanDir(targetDir);
    fs.unlinkSync('package-lock.json');
    try {
        await runNpm('npm',['i','--production']);
        let mc = modclean({ignorePatterns:['example*', 'examples']});
        mc.clean();
        await zipArchive();
    }catch(e){
        console.error(e.stack);
    }
})();
