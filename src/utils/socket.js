import io from 'socket.io-client';
import auth from './auth';

class Socket {
  constructor(socket) {
    this.socket = socket;
  }
  on = (...attrs) => {
    this.socket.on(...attrs);
  }
  emit(key, message) {
    this.socket.emit(key, {
      username: auth.username,
      message
    });
  }
}
export default new Socket(io('http://localhost:3002'))
