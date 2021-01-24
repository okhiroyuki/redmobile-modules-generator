module.exports = function(context) {
    const execSync = require('child_process').execSync;
    const result =  execSync('cd www/nodejs-project && bash prepare.sh').toString();
    console.log(result);
};
