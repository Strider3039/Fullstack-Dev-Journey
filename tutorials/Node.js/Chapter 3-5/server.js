const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const eventEmitter = require('events');
class Emitter extends eventEmitter {};
// initialize object
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));
const PORT = process.env.PORT || 3500;

// set up server to log events
const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath, 
            !contentType.includes('image') ? 'utf8': '');
        const data = contentType === 'application/json' ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200, 
            {'Content-Type': contentType});
        response.end(contentType === 'application/json' ? JSON.stringify(data) : data);
    } catch (err) {
        console.log(err);
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt');
        response.statusCode = 500;
        response.end();
    }
}

// set up server callback function
const server = http.createServer(async (req, res) => {
    console.log(req.url, req.method);
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt');
    const extension = path.extname(req.url);
    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    // chained ternary operator to determine file path

    let filePath;

    if (contentType === 'text/html') {
        if (req.url === '/') {
            // Serve root HTML file
            filePath = path.join(__dirname, 'views', 'index.html');
        } else if (req.url.endsWith('/')) {
            // Serve folder-based index.html (e.g., /subdir/ → views/subdir/index.html)
            filePath = path.join(__dirname, 'views', req.url, 'index.html');
        } else {
            // Serve direct HTML file (e.g., /index.html → views/index.html)
            filePath = path.join(__dirname, 'views', req.url);
        }
    } else {
        // Serve non-HTML content like CSS, JS, images, etc.
        filePath = path.join(__dirname, req.url);
    }



    // makes the .html extension optional
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        serveFile(filePath, contentType, res);
    } else {
        // 404 Not Found
        // 301 Redirect

        // handle redirects
        switch(path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
                // serve a 404 response
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        }
    }

});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));