import {useAtom} from "jotai";
import {messagesAtom} from "@/global/messages.atom";

export function DisplayMessages(){
    const [chat,setChat] = useAtom(messagesAtom)
    return (
        <div>
            {chat.map((msg,i) => {
                return (
                    <p key={`user-${msg.user}-${i}`}>{msg.user}: {msg.message}</p>
                )
            })}
        </div>
    )
}