const fs = require('fs');

// let fileExists = fs.existsSync('MyFunnyFolder');
// console.log("MyFunnyFolderexists:", fileExists)

if (!fs.existsSync('MyFunnyFolder')) {
    fs.mkdirSync("./MyFunnyFolder")

} else {
    fs.rmdirSync("./MyFunnyFolder")
}
const data = "hi"
if (!fs.existsSync('./What/isThis.txt')) {
    fs.mkdirSync("./What")
    fs.writeFileSync("./What/isThis.txt", data);
    console.log('New file is successfully created.');
}

