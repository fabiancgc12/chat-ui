import {atom} from "jotai";
import {MessageModel} from "@/utils/models/MessageModel";

export const messagesAtom = atom<MessageModel[]>([]);
