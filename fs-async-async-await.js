const { readFile , writeFile, readdir } = require('fs');
const path = require('path');

const dirPath = `${__dirname}/Files/`;

const readDir = (dir) => {
    return new Promise((resolve, reject) => {
        readdir(dir, (err, data) => {
            if(err){
                console.log("Can not read Directory...")
                reject(err);
            }
            else
                resolve(data);
        });
    })
}


const getText = (file) => {
    return new Promise((resolve, reject) => {
        readFile(path.join(dirPath, file), 'utf8', (err, data) => {
            if(err)
                reject(err);
            else {
                console.log("Data: ", data);
                resolve(data);
            }
        })
    })
}

const writeText = (path, content) => {
    return new Promise((resolve, reject) => {
        writeFile(path, content, (err, data) => {
            if(err)
                reject(err);
            else
                resolve('success');
        })
    })
}



const readAllFiles = async() => {
    try {
        const dirFilesArray = await readDir(dirPath);
        return Promise.all(dirFilesArray.map( file => getText(file)))
    } catch (error) {
        console.log("Error while reading a file: ", error);
    }
}

const writeContentToFile = async() => {
    try {
        let data = await readAllFiles();
        await writeText('./Files/final.txt', data.toString());
    } catch (error) {
        console.log("Error while writing a file: ", error);
    }
}

writeContentToFile()


//const readWrite = async() => {
//    try {
//        let firstFile = await getText('./Files/first.txt');
//        let secondFile = await getText('./Files/second.txt');
//        await writeText('./Files/final.txt', firstFile + secondFile);
//    } catch (error) {
//        console.log(error);
//    }
//}
//
//readWrite();