import {atom} from "jotai";
import {MessageType} from "@/utils/types/Message.type";

export const messagesAtom = atom<MessageType[]>([]);
