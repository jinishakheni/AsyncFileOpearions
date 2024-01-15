const fs = require('fs');

fs.readFile('./Files/first.txt', 'utf8', (err, data_f) => {
    if(err)
        console.log("First file reading error: ", err);
    else {
        console.log("Data: ", data_f);
        fs.readFile('./Files/second.txt', 'utf8', (err, data_s) => {
            if(err)
                console.log("Second file reading error: ", err);
            else{
                console.log("Data: ", data_s)
                fs.writeFile('./Files/Final.txt', data_f + data_s, (err, data) => {
                    if(err)
                        console.log("Error while writing to the file: ", err)
                    else{
                        console.log("success")
                    }
                })
        }
        })
    }
})