import {atom} from "jotai";

export const whoIsTypingAtom = atom<Set<string>>(new Set([]))