import { MantineProvider } from '@mantine/core'
import {useEffect, useState} from 'react'
import io from 'socket.io-client';

const SERVER = "http://localhost:8000"
const socket = io(SERVER);

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [message,setMessage] = useState("")
    const [chat,setChat] = useState<string[]>([])

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on("message",(msg) => {
            console.log(msg)
            setChat([...chat,msg])
        })

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
        };
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        socket.emit('message',message)
        setMessage("")
    }


  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <div>
              {chat.map(msg => <p>{msg}</p>)}
          </div>
          <form onSubmit={onSubmit}>
                  <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                  <button type="submit">Send</button>
              </form>
      </MantineProvider>
  )
}

export default App
