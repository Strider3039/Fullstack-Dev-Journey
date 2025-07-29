// Cross Origin Resource Sharing
const whiteList = [
    'https://www.yoursite.com', 
    'http://127.0.0.1', 
    'http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;