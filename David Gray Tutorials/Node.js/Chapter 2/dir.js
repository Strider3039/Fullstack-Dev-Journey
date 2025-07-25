const fs = require('fs');

// Create a new directory if it doesn't exist
if (!fs.existsSync('./newDir')) {
    fs.mkdir('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory created successfully');
    })
}

// Create a new directory if it doesn't exist
if (fs.existsSync('./newDir')) {
    fs.rmdir('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory removed successfully');
    })
}