const fs = require('fs');
const path = require('path');
// Using streams for reading and writing files
const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newLorem.txt'));

// listen for data events and write to the new file
// rs.on('data', (datachunk) => {
//     ws.write(datachunk);
// });

// Using pipe method for better performance and cleaner code
rs.pipe(ws);