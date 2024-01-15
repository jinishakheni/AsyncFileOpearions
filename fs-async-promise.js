const {readFile, writeFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

const writeText = (path, content) => {
    return new Promise((resolve, reject) => {
        writeFile(path, content, (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve("success");
            }
        })
    })
}

let firstFileData, secondFileData;

getText('./Files/first.txt').then((data) => {
    console.log("data: ", data);
    firstFileData = data;
}).catch(err => console.log("Error reading first file: ", err));

getText('./Files/second.txt').then((data) => {
    console.log("data: ", data);
    secondFileData = data;

    // once file read is complete, write to file
    writeText('./Files/final.txt', firstFileData + secondFileData).then(data => console.log("data: ", data)).catch(err => console.log("Error writing into the file: ", err));
}).catch(err => console.log("Error reading second file: ", err));

