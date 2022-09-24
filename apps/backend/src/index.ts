import * as http from 'http';
import App from './app';

const port = process.env.PORT || 3001;

App.set('port', port);

const server = http.createServer(App);
server.listen(port);

server.on('listening', () => {
  console.log(`Backend running on port ${port}`);
});

module.exports = App;
