const { readFile, writeFile } = require('fs').promises;

const readWrite = async() => {
    try {
        let firstFile = await readFile('./Files/first.txt', 'utf8');
        let secondFile = await readFile('./Files/second.txt', 'utf8');
        await writeFile('./Files/final.txt', firstFile + secondFile);
    } catch (error) {
        console.log("Error: ", error);
    }
}

readWrite()