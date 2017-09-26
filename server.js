let nock = require("nock");
const http = require("http");

var scope = nock('http://api.example.com')
                .get('/musics')
                .times(2)
                .reply(200, 'OK with music list');
                 
http.get('http://api.example.com/musics'); // "OK with music list"
http.get('http://apiexample.com/musics'); // "OK with music list"
http.get('http://apiexample.com/musics');

