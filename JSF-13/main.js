//? Task 1

const button = document.getElementById('myButton');
const responseDiv = document.getElementById('response');

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/data');

    xhr.onload = () => {
        if (xhr.status === 200) {
            responseDiv.innerText = xhr.responseText;
            button.innerText = 'Data loaded';
        }
    };

    xhr.send();
});

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Here is some data from the server');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

//? Task 2

$(document).ready(function () {
    $('#loadButton').click(function () {
        $.ajax({
            type: 'GET',
            url: 'books.json',
            success: function (data) {
                var authors = [];
                $.each(data, function (key, val) {
                    authors.push(val.author);
                });
                $('#authorsList').empty();
                $.each(authors, function (key, val) {
                    $('#authorsList').append('<li>' + val + '</li>');
                });
            }
        });
    });
});