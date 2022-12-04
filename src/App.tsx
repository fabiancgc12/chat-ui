import { MantineProvider } from '@mantine/core'
import {useEffect, useState} from 'react'
import io from 'socket.io-client';

const SERVER = "http://localhost:8000"
const socket = io(SERVER);

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState("");

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);

    const sendPing = () => {
        socket.emit('ping');
    }

  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <div>
              <p>Connected: { '' + isConnected }</p>
              <p>Last pong: { lastPong || '-' }</p>
              <button onClick={ sendPing }>Send ping</button>
          </div>
      </MantineProvider>
  )
}

export default App
