import io from 'socket.io-client/dist/socket.io';
import feathers from '@feathersjs/client';

const socket = io('http://127.0.0.1:3030');

const app = feathers();
  app.configure(feathers.socketio(socket));
  app.configure(feathers.authentication({
  storage: localStorage,
}));

export default app;