const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const readWrite = async() => {
    try {
        let firstFile = await readFilePromise('./Files/first.txt', 'utf8');
        let secondFile = await readFilePromise('./Files/second.txt', 'utf8');
        await writeFilePromise('./Files/final.txt', firstFile + secondFile);
    } catch(error){
        console.log("Error: ", error);
    }
}

readWrite();