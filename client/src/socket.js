import { io } from 'socket.io-client';

// In Vercel Services or local proxy mode, connect to same-origin '/'
// Or optionally use VITE_SOCKET_URL if provided
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || '/';

export const socket = io(SOCKET_URL, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
  transports: ['websocket', 'polling']
});
