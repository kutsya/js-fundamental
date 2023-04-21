//? Task 1

const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>System Information</h1>');
    res.write(`<p>User Name: ${os.userInfo().username}</p>`);
    res.write(`<p>Operating System Type: ${os.type()}</p>`);
    res.write(`<p>Uptime: ${Math.floor(os.uptime() / 60)} minutes</p>`);
    res.write(`<p>Current Working Directory: ${process.cwd()}</p>`);
    res.write(`<p>Server File Name: ${path.basename(__filename)}</p>`);
    res.end();
});

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});

//? Task 2

function greetUser(name) {
    const time = new Date();
    const hour = time.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return `${greeting}, ${name}!`;
}

module.exports = {
    greetUser,
};

const http = require('http');
const os = require('os');
const path = require('path');
const { greetUser } = require('./personalmodule');

const server2 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>System Information</h1>');
    res.write(`<p>${greetUser(os.userInfo().username)}</p>`);
    res.write(`<p>Operating System Type: ${os.type()}</p>`);
    res.write(`<p>Uptime: ${Math.floor(os.uptime() / 60)} minutes</p>`);
    res.write(`<p>Current Working Directory: ${process.cwd()}</p>`);
    res.write(`<p>Server File Name: ${path.basename(__filename)}</p>`);
    res.end();
});

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});

//? Task 3

const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');

const server3 = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fs.writeFile(filePath, body, err => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Error occurred while writing to file');
                } else {
                    res.end('File has been saved');
                }
            });
        });
    } else if (req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Error occurred while reading file');
            } else {
                res.end(data);
            }
        });
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});