import { MantineProvider } from '@mantine/core'
import {useState} from 'react'
import {MessageType} from "@/utils/types/Message.type";
import {socket, useStartSocket} from "@/hooks/useStartSocket";

function App() {
    const [message,setMessage] = useState("")
    const [chat,setChat] = useState<MessageType[]>([])
    useStartSocket(setChat)
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
