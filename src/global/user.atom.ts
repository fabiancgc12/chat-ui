import {atom} from "jotai";
import {MessageModel} from "@/utils/models/MessageModel";

export const userAtom = atom<string|undefined>("username");
