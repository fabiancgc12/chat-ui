import { MantineProvider } from '@mantine/core'
import {useEffect, useState} from 'react'
import io from 'socket.io-client';

const SERVER = "http://localhost:8000"
const socket = io(SERVER);

type MessageType = {
    message:string,
    user:string
}

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [message,setMessage] = useState("")
    const [chat,setChat] = useState<MessageType[]>([])

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on("message",(msg:MessageType) => {
            setChat(chat => [...chat,msg])
        })

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
        };
    }, []);
    console.log(chat)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newMessage = {
            message,
            user:socket.id
        }
        socket.emit('message', message)
        setMessage("")
        setChat([...chat,newMessage])
    }
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <div>
              {chat.map((msg,i) => {
                  return (
                          <p key={`user-${msg.user}-${i}`}>{msg.user}: {msg.message}</p>
                      )
              })}
          </div>
          <form onSubmit={onSubmit}>
                  <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                  <button type="submit">Send</button>
              </form>
      </MantineProvider>
  )
}

export default App
