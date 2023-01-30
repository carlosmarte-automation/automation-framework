import { WebSocketServer } from 'ws';

import WebSocket from 'ws';

const ws = new WebSocket('wss://websocket-echo.com/');

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function message(data) {
  console.log(`Round-trip time:`, data);

//   setTimeout(function timeout() {
//     ws.send(Date.now());
//   }, 500);
});